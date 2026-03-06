 API RESTful criada  em Node.js com Express e MongoDB para desafio.

## Tecnologias Utilizadas
* Node.js
* Express
* MongoDB (Mongoose)

## Rotas Implementadas
* `POST /order`: Cria um novo pedido mapeando o payload recebido.
* `GET /order/:id`: Retorna os dados de um pedido específico.

## Como rodar localmente
1. Clonar o repositório.
2. Rode `npm install` para instalar as dependências.
3. Crie um arquivo `.env` com a sua `MONGO_URI` e `PORT`.
4. Rode `npm start` (ou `node server.js`).
