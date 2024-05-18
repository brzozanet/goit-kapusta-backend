const Transaction = require("../models/transaction.model");

const createTransaction = async (transactionData) => {
  const newTransaction = new Transaction(transactionData);
  return newTransaction.save();
};

const getAllTransactions = async () => {
  return Transaction.find();
};

const deleteTransaction = async (transactionId) => {
  return Transaction.findByIdAndDelete(transactionId);
};

const getTransactionById = async (transactionId) => {
  return Transaction.findById(transactionId);
};

module.exports = {
  createTransaction,
  getAllTransactions,
  deleteTransaction,
  getTransactionById,
};
