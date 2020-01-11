const connection = require("../server/db/connection");

class Department {
  constructor() {

  };

  view() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM department`, (err, results) => {
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
      connection.query(`INSERT INTO department (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, ["edit here"], (err, results) => {
        if(err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  };

}