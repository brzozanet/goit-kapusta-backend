const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/transaction.controller");
const auth = require("../auth/user.auth");

router.post("/expense", auth, expenseController.addExpense);
module.exports = router;
