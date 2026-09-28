# PG-15 — Parcerias administrativas do ERJ

Prévia didática interativa sobre instrumentos de parceria no Estado do Rio de Janeiro. Pesquisa com corte em 25/09/2026, integração documental em 26/09/2026 e atualização visual em 28/09/2026; versão 4.2.1.

**[Abrir a aplicação](https://leocarrilho7-lab.github.io/PG-15/)** · [abrir Cenas 3D](https://leocarrilho7-lab.github.io/PG-15/#acabamento)

O material oferece passo a passo, Mapa 2D, Mermaid e Cenas 3D sincronizados. Mapa 2D e Mermaid permitem selecionar o sistema inteiro. A vista 3D exibe somente a cena atual, com figuras, luminária e documentos; o zoom-out não revela outras etapas. O filme contextualiza a pergunta, apresenta as alternativas e aguarda uma escolha explícita. Voltar refaz o voo, e a ficha do resultado reúne fundamentos, condições e ressalvas.

Os botões das quatro vistas e da etapa de seleção usam ícones contextuais no estilo dos instrumentos: cada desenho representa o assunto da escolha. As setas dos grafos conservam suas cores e traçados; uma resposta afirmativa não significa aprovação jurídica. A atualização preserva integralmente o modelo jurídico, as narrativas e os 122 MP3 da v4.2.

## Fontes e limites

A aplicação mantém fontes e pendências jurídicas visíveis, inclusive enquadramentos condicionados. Não constitui ferramenta oficial, parecer, aprovação de procedimento ou decisão automática sobre casos concretos. Autoria nominal e revisão jurídica permanecem pendentes; a publicação não indica endosso da PGE-RJ ou do Estado do Rio de Janeiro.

Os textos e áudios conservam as ressalvas do modelo. Normas e reproduções de terceiros ficam no acervo local de pesquisa; o site aponta para as fontes. Pilotos de voz, arquivos de conta, PDFs e ambientes de desenvolvimento não integram este repositório.

A atualização de 26/09/2026 aplica os cartões aprovados: matriz MROSC por dispositivo, fichas de instrução e controle, quadro comparativo da minuta OSCIP e instrumentos de CT&I, patrimônio, cultura, OS setoriais e programas delimitados. PMI e SRP incorporam a cadeia normativa examinada. O quadro da minuta OSCIP é apoio para revisão; o original de 2017 foi preservado, sem converter a proposta em minuta oficial atualizada.

O painel exibe seis itens parciais e dois abertos. Os 22 levantamentos encerrados ficam no histórico local, mantendo fontes e condições do caso nas rotas. Permanecem lacunas sobre autoridade/regulamento, cadastro e reciprocidade OSCIP; revisão da minuta; fundamento posterior para OS na saúde; cópia autônoma de promulgação CT&I; operação do Sicx e rito/competências do diálogo competitivo. D1/D2/D3 estão preparadas para protocolo manual, sem envio.

O índice reúne 46 capturas, das quais 45 foram conferidas como íntegras documentais e uma conserva reserva editorial (LC 26). Captura ou integridade não certificam vigência exaustiva, enquadramento ou regularidade de um caso.

## Narração e licenças

Narração sintética gerada localmente com Kokoro-82M, voz brasileira Dora (`pf_dora`), com direção de texto, ritmo e pausas do projeto. São 122 arquivos MP3 finais, reutilizados pelas cenas; o manifesto vincula cada trecho ao texto e ao seu SHA-256. Áudio é carregado sob demanda. Transcrição e escolhas continuam acessíveis quando o áudio falha.

As URLs dos áudios incluem o hash do conteúdo para evitar que uma atualização de texto reproduza uma gravação anterior em cache. A edição offline mantém os áudios incorporados.

Código autoral: Apache-2.0. Textos didáticos autorais licenciáveis: CC BY 4.0. Bibliotecas e materiais de terceiros conservam seus próprios termos. As licenças do código/textos não se estendem automaticamente às gravações sintéticas. Atribuição: Projeto PG-15 e o endereço deste repositório. Consulte [LICENSE](LICENSE), [LICENSE-TEXTS.md](LICENSE-TEXTS.md), [LICENCAS.md](LICENCAS.md) e [NOTICE](NOTICE).

## Organização e atualização

- `web/`: edição estática preparada para publicação.
- `web/audio-manifest.json`: textos, integridade e proveniência dos áudios finais.
- `scripts/verify-public.mjs`: verifica lista de arquivos admitidos, autorização registrada e hashes.
- `gh-pages`: branch dedicado à cópia verificada da edição web; o GitHub Pages serve sua raiz.

Este repositório contém a edição estática. Os fontes de desenvolvimento, a geração local de áudio, os documentos de pesquisa e o HTML independente para uso offline são mantidos no pacote local do projeto. Para atualizar, gerar e testar uma nova edição nesse pacote, substituir somente os arquivos admitidos de `web/`, conferir o manifesto e abrir PR após revisão independente do código. A publicação deve continuar condicionada à autorização do responsável.

Para manter os hashes também no checkout do Windows, clone sem conversão automática de finais de linha:

```sh
git clone --config core.autocrlf=false https://github.com/leocarrilho7-lab/PG-15.git
```

Verificação do pacote com Node.js 24:

```sh
node scripts/verify-public.mjs web
```

Alterar `main` não publica o site. Após revisão, integração autorizada e verificação do pacote, copiar somente a edição admitida de `web/` para a raiz do branch `gh-pages`, preservando o marcador vazio `.nojekyll`. Conferir os arquivos e hashes antes de enviar esse branch: o GitHub Pages atualiza o site quando ele recebe uma nova versão. O uso de um branch dedicado evita depender de autorização para criar workflows de Actions.
