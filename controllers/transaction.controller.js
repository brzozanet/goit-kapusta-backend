const expenseService = require("../services/transaction.service");
const userService = require("../services/user.service");

const addExpense = async (req, res, next) => {
  try {
    const { description, amount, date, category } = req.body;
    const userId = req.user.id;

    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Invalid user",
      });
    }

    const newExpense = await expenseService.createExpense({
      description,
      amount,
      date,
      category,
      userId,
    });

    if (!user.transactions) {
      user.transactions = [];
    }

    user.balance -= amount;
    user.transactions.push(newExpense._id);
    await user.save();

    res.status(200).json({
      newBalance: user.balance,
      transaction: newExpense,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addExpense };
