const mongoose = require("mongoose");

const { Schema } = mongoose;

const expenseSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Expense",
    },
  ],
});

const Expense = mongoose.model("expense", expenseSchema);

module.exports = Expense;
