# PG-15 — Parcerias administrativas do ERJ

Prévia didática interativa sobre instrumentos de parceria no Estado do Rio de Janeiro. Base normativa examinada em 25/09/2026; versão 4.1.

**[Abrir a aplicação](https://leocarrilho7-lab.github.io/PG-15/)** · [comparar os poliedros 3D](https://leocarrilho7-lab.github.io/PG-15/#acabamento)

O material oferece passo a passo, Mapa 2D, Mermaid e Universo 3D sincronizados. O percurso começa progressivo; cada vista permite selecionar o sistema inteiro. As cores, formas e relações acompanham condições e ramificações. A opção B utiliza estrutura metálica dourada ou prateada e vidro colorido. O filme contextualiza a etapa, apresenta as alternativas e aguarda uma escolha explícita.

## Fontes e limites

A aplicação mantém fontes e pendências jurídicas visíveis, inclusive enquadramentos condicionados. Não constitui ferramenta oficial, parecer, aprovação de procedimento ou decisão automática sobre casos concretos. Autoria nominal e revisão jurídica permanecem pendentes; a publicação não indica endosso da PGE-RJ ou do Estado do Rio de Janeiro.

Os textos e áudios conservam as ressalvas do modelo. Normas e reproduções de terceiros ficam no acervo local de pesquisa; o site aponta para as fontes. Pilotos de voz, arquivos de conta, PDFs e ambientes de desenvolvimento não integram este repositório.

A atualização documental de 25/09/2026 incorpora a fonte primária do Decreto 50.327/2026 e os avanços documentados sobre OSCIPs, cultura e OS. O painel exibe 10 itens parciais e 2 abertos; os 12 itens resolvidos ficam no histórico local. Isso não encerra a compatibilidade integral do MROSC, as lacunas de autoridade/cadastro/reciprocidade OSCIP ou o fundamento posterior para OS na saúde. Os resultados permanecem orientativos e condicionados.

## Narração e licenças

Narração sintética gerada localmente com Kokoro-82M, voz brasileira Dora (`pf_dora`), com direção de texto, ritmo e pausas do projeto. São 120 arquivos MP3 finais, reutilizados pelas cenas; o manifesto vincula cada trecho ao texto e ao seu SHA-256. Áudio é carregado sob demanda. Transcrição e escolhas continuam acessíveis quando o áudio falha.

As URLs dos áudios incluem o hash do conteúdo para evitar que uma atualização de texto reproduza uma gravação anterior em cache. A edição offline mantém os áudios incorporados.

Código autoral: Apache-2.0. Textos didáticos autorais licenciáveis: CC BY 4.0. Bibliotecas e materiais de terceiros conservam seus próprios termos. As licenças do código/textos não se estendem automaticamente às gravações sintéticas. Atribuição: Projeto PG-15 e o endereço deste repositório. Consulte [LICENSE](LICENSE), [LICENSE-TEXTS.md](LICENSE-TEXTS.md), [LICENCAS.md](LICENCAS.md) e [NOTICE](NOTICE).

## Organização e atualização

- `web/`: edição estática preparada para publicação.
- `web/audio-manifest.json`: textos, integridade e proveniência dos áudios finais.
- `scripts/verify-public.mjs`: verifica lista de arquivos admitidos, autorização registrada e hashes.
- `gh-pages`: branch dedicado à cópia verificada da edição web; o GitHub Pages serve sua raiz.

Este repositório contém a edição estática. Os fontes de desenvolvimento, a geração local de áudio, os documentos de pesquisa e o HTML independente para uso offline são mantidos no pacote local do projeto. Para atualizar, gerar e testar uma nova edição nesse pacote, substituir somente os arquivos admitidos de `web/`, conferir o manifesto e abrir PR após revisão independente do código. A publicação deve continuar condicionada à autorização do responsável.

Verificação do pacote com Node.js 24:

```sh
node scripts/verify-public.mjs web
```

Alterar `main` não publica o site. Após revisão, integração autorizada e verificação do pacote, copiar somente a edição admitida de `web/` para a raiz do branch `gh-pages`, preservando o marcador vazio `.nojekyll`. Conferir os arquivos e hashes antes de enviar esse branch: o GitHub Pages atualiza o site quando ele recebe uma nova versão. O uso de um branch dedicado evita depender de autorização para criar workflows de Actions.
