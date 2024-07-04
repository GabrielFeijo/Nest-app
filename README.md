# NestJS-Api

Este projeto implementa uma API RESTful usando NestJS para gerenciar informações de usuários. Ele oferece operações básicas de CRUD (Create, Read, Update, Delete) para usuários em um sistema.

## 🚀 Início

Estas instruções permitirão que você obtenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/pt) (inclui npm)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- [Docker](https://www.docker.com/get-started) - para executar o banco de dados em um contêiner

Também é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🔧 Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

Clone o repositório:

```bash
# Clone o repositório
$ git clone https://github.com/GabrielFeijo/Nest-app

$ cd Nest-app

# Instale as dependências
$ npm install

# Inicie o Docker se ainda não estiver em execução.
# Use o seguinte comando para iniciar um banco de dados PostgreSQL em um contêiner Docker:
$ docker-compose up -d

# Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, com as configurações de conexão do banco de dados.

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev
```

A aplicação será iniciada localmente em http://localhost:3000. Agora você pode acessar os endpoints da API.

Documentação da aplicação:
http://localhost:3000/api-docs

## 📦 Utilização

Acesse os seguintes endpoints da API para gerenciar produtos:

- GET /users: Retorna uma lista de todos os usuários.
- GET /users/:id: Retorna detalhes de um usuário específico pelo seu ID.
- POST /users: Cria um novo usuário. Requer um corpo JSON com os detalhes do usuário.
- PUT /users/:id: Atualiza um usuário existente pelo seu ID. Requer um corpo JSON com os detalhes atualizados do usuário.
- DELETE /users/:id: Deleta um usuário pelo seu ID.

## 🛠️ Feito utilizando

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" width="40" height="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="40" height="45" />
