const express = require("express");
const employee = require("../db/employee");
const router = express.Router();

// GET all employees
router.get("/api/employees", async (req, res) => {
  try {
    let results = await employee.view();
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// router.put()

// router.post()

// router.delete()
router.delete("/api/employees/:id", async (req, res) => {
  try {
    let results = await employee.delete(req.params.id);
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
