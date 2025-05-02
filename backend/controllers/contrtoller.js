const { getDB } = require("../config/mongodb");

const getActiveUsers = async (req, res) => {
  try {
    const db = getDB();
    const activeCustomers = await db
      .collection("customers")
      .find({ active: true })
      .toArray();
    res.json({ success: true, activeCustomers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const db = getDB();
    const account_id = Number(req.query.account_id);
    const allTransactions = await db
      .collection("transactions")
      .find({ account_id })
      .toArray();

    res.json({ success: true, allTransactions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getActiveUsers,
  getAllTransactions,
};
