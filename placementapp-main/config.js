import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  password: "Devika@2002",
  database: "placement",
  host: "localhost",
  port: 5432
});