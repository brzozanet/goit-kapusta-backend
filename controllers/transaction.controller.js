const transactionService = require("../services/transaction.service");
const userService = require("../services/user.service");

const addExpense = async (req, res, next) => {
  try {
    const { description, amount, date } = req.body;
    const userId = req.user.id;

    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Invalid user",
      });
    }

    const { day, month, year } = date;
    const categories = "Wydatek";

    const newTransaction = await transactionService.createTransaction({
      date: { day, month, year },
      description,
      categories,
      amount,
      income: false,
      owner: userId,
    });

    user.balance -= amount;
    await user.save();

    res.status(200).json({
      newBalance: user.balance,
      transaction: newTransaction,
    });
  } catch (error) {
    next(error);
  }
};

const addIncome = async (req, res, next) => {
  try {
    const { description, amount, date } = req.body;
    const userId = req.user.id;

    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Invalid user",
      });
    }

    const { day, month, year } = date;
    const categories = "Wydatek 2";

    const newTransaction = await transactionService.createTransaction({
      date: { day, month, year },
      description,
      categories,
      amount,
      income: true,
      owner: userId,
    });

    user.balance += amount;
    await user.save();

    res.status(200).json({
      newBalance: user.balance,
      transaction: newTransaction,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addExpense,
  addIncome,
};
