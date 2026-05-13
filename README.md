# Animal Life — Links

Página de links personalizada para o perfil de Instagram **Animal Life**.

## Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## Como editar os produtos

Os produtos ficam em arquivos JSON na pasta `data/` na raiz do projeto:

### `data/produtos.json` — Achadinhos Pet

Contém os produtos de cada marketplace (Mercado Livre, Amazon, Shopee). Estrutura:

```json
{
  "mercado-livre": [
    {
      "id": 1,
      "nome": "Nome do Produto",
      "imagem": "https://url-da-imagem.com/foto.jpg",
      "link": "https://mercadolivre.com.br/seu-link-afiliado"
    }
  ],
  "amazon": [...],
  "shopee": [...]
}
```

### `data/infoprodutos.json` — Conteúdos e Cursos

Contém os infoprodutos próprios e de parceiros:

```json
{
  "animal-life": [
    {
      "id": 1,
      "nome": "Nome do E-book",
      "imagem": "https://url-da-imagem.com/capa.jpg",
      "link": "https://seu-link.com"
    }
  ],
  "parceiros": [...]
}
```

### Para adicionar um novo produto:

1. Abra o arquivo JSON correspondente
2. Adicione um novo objeto no array do marketplace/categoria desejado
3. Use um `id` único (incremente o último)
4. Coloque a URL da imagem do produto em `imagem`
5. Coloque o link de afiliado em `link`
6. Salve o arquivo — o Next.js vai atualizar automaticamente em modo dev

### Para usar imagens locais:

1. Coloque a imagem na pasta `public/` (ex: `public/produtos/coleira.jpg`)
2. Use o caminho `/produtos/coleira.jpg` no campo `imagem` do JSON

## Build para produção

```bash
npm run build
npm start
```
