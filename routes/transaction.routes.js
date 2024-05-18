const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction.controller");
const auth = require("../auth/user.auth");

router.post("/income", auth, transactionController.addIncome);
router.post("/expense", auth, transactionController.addExpense);
router.delete("/:transactionId", auth, transactionController.deleteTransaction);
module.exports = router;
