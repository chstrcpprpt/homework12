const express = require("express");
const db = require("../db");
const router = express.Router();

// GET all employees
router.get("/api/employees", async (req, res) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// GET a single employee
router.get("/api/employees/:id", async (req, res) => {
  try {
    let results = await db.one(req.params.id);
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
    let results = await db.delete(req.params.id);
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
