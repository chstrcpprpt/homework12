const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'I87cookies!',
  database: 'company_db'
});

let companydb = {};

// Create a db method that will return all employees from the table
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

// Create a db method that will return a single employee from the table
companydb.one = (id) => {
  return new Promise((reslove, reject) => {
    connection.query(`SELECT * FROM employee WHERE id = ?`, [id], (err, results) => {
      if(err) {
        return reject(err);
      }
      return reslove(results);
    });
  });
}

// Create a db method that creates a new employee
// edit "edit here"
companydb.insert = () => {
  return new Promise((reslove, reject) => {
    connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, ["edit here"], (err, results) => {
      if(err) {
        return reject(err);
      }
      return reslove(results);
    });
  });
};

// Create a db method that updates an employees role
companydb.updateRole = (id) => {
  return new Promise((reslove, reject) => {
    connection.query(`UPDATE employee SET role_id WHERE id = ?`, [id], (err, results) => {
      if(err) {
        return reject(err);
      }
      return reslove(results);
    });
  });
};

// Create a db method that will delete an employee from the table
companydb.delete = (id) => {
  return new Promise((reslove, reject) => {
    connection.query(`DELETE FROM employee WHERE id = ?`, [id], (err, results) => {
      if(err) {
        return reject(err);
      }
      return reslove(results);
    });
  });
};

module.exports = companydb;