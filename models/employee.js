const connection = require("../server/db/connection");

// let companydb = {};

class employee {
  constructor() {

  };

  view() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM employee`, (err, results) => {
        if(err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  };

  // need to edit the query
  add() {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, ["edit here"], (err, results) => {
        if(err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  };

  updateRole(id) {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE employee SET role_id WHERE id = ?`, [id], (err, results) => {
        if(err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  };

  delete(id) {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM employee WHERE id = ?`, [id], (err, results) => {
        if(err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  };

};

// Create a db method that will return all employees from the table
// companydb.all = () => {
//   return new Promise((resolve, reject) => {
//     connection.query(`SELECT * FROM employee`, (err, results) => {
//       if(err) {
//         return reject(err);
//       }
//       return resolve(results);
//     });
//   });
// };

// DOESN'T ASK FOR THIS
// Create a db method that will return a single employee from the table
// companydb.one = (id) => {
//   return new Promise((resolve, reject) => {
//     connection.query(`SELECT * FROM employee WHERE id = ?`, [id], (err, results) => {
//       if(err) {
//         return reject(err);
//       }
//       return resolve(results);
//     });
//   });
// }

// Create a db method that creates a new employee
// edit "edit here"
// companydb.insert = () => {
//   return new Promise((resolve, reject) => {
//     connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, ["edit here"], (err, results) => {
//       if(err) {
//         return reject(err);
//       }
//       return resolve(results);
//     });
//   });
// };

// Create a db method that updates an employees role
// companydb.updateRole = (id) => {
//   return new Promise((resolve, reject) => {
//     connection.query(`UPDATE employee SET role_id WHERE id = ?`, [id], (err, results) => {
//       if(err) {
//         return reject(err);
//       }
//       return resolve(results);
//     });
//   });
// };

// Create a db method that will delete an employee from the table
// companydb.delete = (id) => {
//   return new Promise((resolve, reject) => {
//     connection.query(`DELETE FROM employee WHERE id = ?`, [id], (err, results) => {
//       if(err) {
//         return reject(err);
//       }
//       return resolve(results);
//     });
//   });
// };

// module.exports = companydb;
module.exports = employee;