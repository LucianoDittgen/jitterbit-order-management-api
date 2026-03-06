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
