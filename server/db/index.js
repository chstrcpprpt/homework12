const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'I87cookies!',
  database: 'company_db'
});

let companydb = {};

companydb.all = () => {
  return new Promise((reslove, reject) => {
    connection.query(`SELECT * FROM employee`, (err, results) => {
      if(err) {
        return reject(err);
      }
      return reslove(results);
    });
  });
};

module.exports = companydb;