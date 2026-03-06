# Jitterbit API - Gerenciamento de Pedidos

Esta é uma API RESTful desenvolvida em Node.js com Express e MongoDB para um desafio técnico. A API realiza o gerenciamento de pedidos (CRUD completo) e aplica a transformação de dados (mapping) do payload de entrada para o padrão do banco de dados, conforme exigido nos requisitos.

## Tecnologias Utilizadas
* **Node.js & Express** - Criação do servidor e roteamento.
* **MongoDB & Mongoose** - Banco de dados NoSQL e modelagem de dados.
* **Docker & Docker Compose** - Containerização do ambiente de banco de dados local.
* **Swagger (OpenAPI)** - Documentação interativa da API.

## Como rodar o projeto localmente

### 1. Pré-requisitos
* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* [Docker](https://www.docker.com/) e Docker Compose

### 2. Instalação das Dependências
Clone o repositório e instale as bibliotecas necessárias:
```bash
# Baixe as dependências do Node
npm install

## 🔐 Autenticação (JWT)
Todas as rotas de gerenciamento de pedidos (`/order`) são protegidas e requerem autenticação.

1. Faça uma requisição `POST` para a rota `/login` (nenhum payload é necessário).
2. Copie o `token` retornado no JSON de resposta.
3. Para testar via API cliente (Postman, Insomnia, curl), adicione o token ao cabeçalho da requisição:
   `Authorization: Bearer <SEU_TOKEN_GERADO>`
4. Para testar via **Swagger**, clique no botão **"Authorize"** no topo da página e cole o token.
