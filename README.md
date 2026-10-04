<div align="center">

# 👾 Cadastro de Usuários

**WEB PAGE AT3** · Projeto de desenvolvimento web

Aplicação web para cadastrar, listar e excluir usuários com nome e e-mail.

`HTML` · `CSS` · `JavaScript` · `Node.js` · `Express` · `PostgreSQL`

</div>

---

## 🎮 Como executar

Requisitos: Node.js, npm e PostgreSQL.

1. Na pasta `web-page-at3`, instale as dependências:

   ```bash
   npm i
   ```

2. Crie o banco de dados:

   ```sql
   CREATE DATABASE web_page_at3;
   ```

   Conecte-se ao banco criado e adicione a tabela:

   ```sql
   CREATE TABLE IF NOT EXISTS users (
       id_user SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       email TEXT NOT NULL
   );
   ```

3. Crie um arquivo `.env` na pasta `web-page-at3` com os dados da sua conexão:

   ```dotenv
   PORT=3000
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=sua_senha
   POSTGRES_DB=web_page_at3
   ```

   Como alternativa, use `DATABASE_URL` no lugar das variáveis `POSTGRES_*`. Ela tem prioridade quando definida. Mantenha `PORT` configurada e não versione suas credenciais.

4. Inicie o servidor:

   ```bash
   npm start
   ```

   Acesse [http://localhost:3000](http://localhost:3000).

Para desenvolvimento, use `npm run dev` com uma versão do Node.js compatível com `node --watch`.

## ⚡ API

- `GET /users` — lista os usuários em ordem alfabética.
- `POST /users` — cadastra um usuário com JSON: `{"name":"Julia","email":"julia@example.com"}`.
- `DELETE /users/:id` — exclui o usuário pelo identificador.

## 🧩 Estrutura

- `public/` — página, estilos e JavaScript da interface.
- `src/database/` — conexão com o banco e consultas SQL.
- `src/routes/` — rotas da API.
- `src/server.js` — servidor Express.

---
