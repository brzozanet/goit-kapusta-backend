const Transaction = require("../models/transaction.model");

const createTransaction = async (transactionData) => {
  const newTransaction = new Transaction(transactionData);
  return newTransaction.save();
};

const getAllTransactions = async () => {
  return Transaction.find();
};

module.exports = {
  createTransaction,
  getAllTransactions,
};
