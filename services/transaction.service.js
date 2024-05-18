const Expense = require("../models/transaction.model");

const createExpense = async (expenseData) => {
  return Expense.create(expenseData);
};

const getAllExpenses = async () => {
  return Expense.find();
};


module.exports = {
  createExpense,
  getAllExpenses,
};
