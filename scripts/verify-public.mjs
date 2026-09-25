import {readFileSync,readdirSync,lstatSync,existsSync} from 'node:fs';
import {resolve,relative,sep} from 'node:path';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const root=resolve(process.argv[2]||'web');
const manifestBytes=readFileSync(resolve(root,'audio-manifest.json'));
const manifest=JSON.parse(manifestBytes);
const validatedBytes=new Map([['audio-manifest.json',manifestBytes]]);
assert.equal(manifest.complete,true);assert.equal(manifest.voiceId,'pf_dora');
assert.equal(manifest.publicationAuthorized,true,'A seleção de voz não substitui autorização de publicação');
assert.equal(Object.keys(manifest.clips).length,80);assert.equal(Object.keys(manifest.intros).length,5);
assert.equal(Object.keys(manifest.prompts).length,80);
const clips=[...Object.values(manifest.clips),...Object.values(manifest.intros),...Object.values(manifest.prompts)], allowed=new Set(), records=new Map();
for(const clip of clips){
 assert.match(clip.file,/^audio\/dora\/[a-z0-9_-]+\.mp3$/);
 if(records.has(clip.file)){assert.deepEqual(clip,records.get(clip.file),'Áudio reutilizado com metadados divergentes');continue;}
 records.set(clip.file,clip);allowed.add(clip.file);
 const bytes=readFileSync(resolve(root,clip.file));assert.equal(bytes.length,clip.bytes);
 assert.equal(createHash('sha256').update(bytes).digest('hex'),clip.sha256);
 validatedBytes.set(clip.file,bytes);
}
const all=[];function walk(dir){for(const file of readdirSync(dir)){const full=resolve(dir,file),stat=lstatSync(full);assert.ok(!stat.isSymbolicLink(),'Link simbólico não admitido: '+full);if(stat.isDirectory())walk(full);else all.push(relative(root,full).split(sep).join('/'));}}walk(root);
const staticPaths=['index.html','assets/app.js','assets/style.css','audio-manifest.json','LICENSE','LICENSE-TEXTS.md','NOTICE','LICENCAS.md','licencas/three-MIT.txt','licencas/mermaid-MIT.txt','licencas/esbuild-MIT.txt'];
assert.deepEqual(new Set(all),new Set([...staticPaths,...allowed]),'Composição pública divergente da lista positiva');
assert.deepEqual(new Set(all.filter(p=>p.endsWith('.mp3'))),allowed);
for(const path of all){assert.ok(!/\.(?:wav|zip|pdf)$/i.test(path));assert.ok(!/(?:^|\/)(?:piloto|fontes|\.git|\.runtime|node_modules)(?:\/|$)/.test(path));}
for(const path of ['LICENSE','LICENSE-TEXTS.md','NOTICE','LICENCAS.md','licencas/three-MIT.txt'])assert.ok(existsSync(resolve(root,path)),path);
const htmlBytes=readFileSync(resolve(root,'index.html'));validatedBytes.set('index.html',htmlBytes);
const html=htmlBytes.toString('utf8');assert.ok(!html.includes('data:audio/'));assert.ok(!/Microsoft Maria|GDzHdQOi6jjf8zaXhCYD/.test(html));
for(const path of ['assets/app.js','assets/style.css']){
 const bytes=readFileSync(resolve(root,path));
 const version=createHash('sha256').update(bytes).digest('hex');
 assert.ok(html.includes(`${path}?v=${version}"`),'Recurso público sem versão de conteúdo: '+path);
}
const inventory=[...all].sort().map(path=>{const bytes=validatedBytes.get(path)||readFileSync(resolve(root,path));return {path,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};});
console.log(JSON.stringify({status:'PASS',files:all.length,doraClips:allowed.size,publicationAuthorized:manifest.publicationAuthorized,inventory}));
