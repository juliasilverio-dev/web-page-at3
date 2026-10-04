const dotenv = require("dotenv");
const path = require("path");
const { Pool } = require("pg");

dotenv.config({
  path: path.resolve(__dirname, "..", "..", ".env"),
});

let config;
if (process.env.DATABASE_URL) {
  config = {
    connectionString: process.env.DATABASE_URL,
  };
} else {
   config = {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
  };
}
const pool = new Pool(config);

pool.on("error", (err) => {
  console.error("Erro inesperado no pool:", err.message);
});

module.exports = pool;
