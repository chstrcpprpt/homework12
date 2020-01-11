// const express = require("express");
const inquirer = require("inquirer");
const cTable = require('console.table');
const connection = require("./connection");

// const employee = require("../models/employee");
// const router = express.Router();

// new department
function newDepartment() {
  const questions = [
    {
      name: "departmentName",
      message: "Please enter the department name"
    }
  ];

  inquirer.prompt(questions).then((answer) => {
    const {departmentName} = answer;

    connection.query(
      "INSERT INTO department (name) VALUES ?", 
      [departmentName], 
      (err, data) => {
        if (err) throw err;
        console.log(data);
    });

  });
};

// new role
function newRole() {
  const questions = [
    {
      name: "roleTitle",
      message: "Please enter the role title"
    },
    {
      name: "roleSalary",
      message: "Please enter the role salary"
    },
    {
      name: "roleDepartmentId",
      message: "Please enter department ID for the new role"
    }
  ];

  inquirer.prompt(questions).then((answer) => {
    const {roleTitle, roleSalary, roleDepartmentId} = answer;

    connection.query(
      "INSERT INTO roles SET ?",
      {
        title: roleTitle,
        salary: roleSalary,
        department_id: roleDepartmentId
      },
      (err, data) => {
        if (err) throw err;
        console.log(data);
      });

  });
};

// new employee
function newEmployee() {
  const questions = [
    {
      name: "employeeFirstName",
      message: "Please enter employee first name"
    },
    {
      name: "employeeLastName",
      message: "Please enter employee last name"
    },
    {
      name: "employeeRoleId",
      message: "Please enter employee role ID"
    },
    {
      name: "employeeManagerId",
      message: "Please enter employee manager ID (if applicable)",
      default: "NULL"
    }
  ];

  inquirer.prompt(questions).then((answer) => {
    const {employeeFirstName, employeeLastName, employeeRoleId, employeeManagerId} = answer;

    connection.query("INSERT INTO employee SET ?", 
      {
        first_name: employeeFirstName,
        last_name: employeeLastName,
        role_id: employeeRoleId,
        manager_id: employeeManagerId
      },
      (err, data) => {
        if (err) throw err;
        console.log(data);
      });

  });
};

// view department
function viewDepartment() {
  connection.query(
    "SELECT * FROM department",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
};

// view roles
function viewRoles() {
  connection.query(
    "SELECT * FROM roles",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
};
// view employees
function viewEmployees() {
  connection.query(
    "SELECT * FROM employees",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
};

// update employee role
function updateEmployeeRole() {
  const employees = connection.query(
    'SELECT CONCAT(first_name, " ", last_name) AS fullName FROM employee;',
    (err, data) => {
      if (err) throw err;
      return data;
    }
  );

  const questions = [
    {
      name: "selectEmployee",
      message: "Please select the employee whose role you would like to update",
      type: "List",
      choices: employee
    },
    {
      name: "newRoleId",
      message: "Please enter the employee's new role ID"
    }
  ];

  inquirer.prompt(questions).then((answer) => {
    const {selectEmployee, newRoleId} = answer;

    const employeeId = connection.query(
      'SELECT id FROM (SELECT id, CONCAT(first_name, " ", last_name) AS fullName FROM employee) a WHERE fullName = ?;',
      [selectEmployee],
      (err, data) => {
        if (err) throw err;
        return data;
      }
    );

    connection.query(
      "UPDATE employee SET ? WHERE ?",
      [
        {
          role_id: newRoleId
        },
        {
          id: employeeId
        }
      ],
      (err, data) => {
        if (err) throw err;
        console.log(`${selectEmployee} updated successfully`);
      }
    );

  });
};

// ==================================================
// Ask user
inquirer
  .prompt([
    {
      type: "list",
      name: "userAction",
      message: "What would you like to do?",
      choices: [
        "Add department", 
        "Add role",
        "Add employee",
        "View department",
        "View roles",
        "View employees",
        "Update employee roles"]
    }
  ])
  .then(function(answer) {
    switch (answer) {
    case "Add department":
      newDepartment();
      break;

    case "Add role":
      newRole();
      break;

    case "Add employee":
      newEmployee();
      break;

    case "View department":
      songSearch();
      break;

    case "View roles":
      songSearch();
      break;

    case "View employees":
      songSearch();
      break;

    case "Update employee roles":
      updateEmployeeRole();
      break;

    case "exit":
      connection.end();
      break;
    }
  });

  // .then((answer) => {
  //   const {userAction} = answer;
  //   console.log(userAction);
  // });

// GET all employees
// router.get("/api/employees", async (req, res) => {
//   try {
//     let results = await e1324mployee.view();
//     res.json(results);
//   } catch(err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// });

// router.put()

// router.post()

// router.delete()
// router.delete("/api/employees/:id", async (req, res) => {
//   try {
//     let results = await employee.delete(req.params.id);
//     res.json(results);
//   } catch(err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// });

module.exports = router;
