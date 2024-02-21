const mysql = require("mysql");

const {
  MYSQL_HOST,
  MYSQL_PASS,
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PORT,
} = require("../environment");

const pool = mysql.createPool({
  host: MYSQL_HOST,
  password: MYSQL_PASS,
  user: MYSQL_USER,
  database: MYSQL_DB,
  port: Number(+MYSQL_PORT),
});

module.exports = pool;
