require("dotenv").config();

module.exports.PORT = process.env.PORT || 4001;
module.exports.MYSQL_HOST = process.env.MYSQL_HOST;
module.exports.MYSQL_PORT = process.env.MYSQL_PORT;
module.exports.MYSQL_USER = process.env.MYSQL_USER;
module.exports.MYSQL_PASS = process.env.MYSQL_PASS;
module.exports.MYSQL_DB = process.env.MYSQL_DB;
