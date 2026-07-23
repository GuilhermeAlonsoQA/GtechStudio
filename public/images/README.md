# Imagens dos templates

Coloque aqui as fotos de cada nicho. Assim que o arquivo existir com o nome
exato abaixo, ele aparece automaticamente no template — sem alterar código.
Enquanto o arquivo não existe, o site mostra um painel de gradiente com o
ícone do nicho (placeholder premium).

## Convenção de nomes

Para cada nicho (`advogados`, `dentistas`, `psicologos`, `contadores`,
`consultores`, `arquitetos`, `barbearias`, `clinicas`), crie a pasta com o
mesmo nome do slug e adicione:

```
public/images/<nicho>/hero.jpg     # foto principal (hero) — retrato/ambiente
public/images/<nicho>/about.jpg    # foto da seção "Sobre"
public/images/<nicho>/1.jpg        # galeria (imagem 1)
public/images/<nicho>/2.jpg        # galeria (imagem 2)
public/images/<nicho>/3.jpg        # galeria (imagem 3)
```

Exemplo para advogados:

```
public/images/advogados/hero.jpg
public/images/advogados/about.jpg
public/images/advogados/1.jpg
public/images/advogados/2.jpg
public/images/advogados/3.jpg
```

## Recomendações

- Formato: `.jpg` (ou `.webp`). Se usar outra extensão, avise para ajustar o caminho.
- Proporção ideal: 4:3 (ex.: 1200×900). O hero também aceita retratos.
- Peso: comprima antes de subir (ideal < 300 KB por imagem). O Next.js
  ainda otimiza automaticamente, mas subir leve ajuda.
- Use fotos coerentes com o nicho e a cor de acento de cada template.
