const express = require("express");
const { getActiveUsers, getAllTransactions } = require("../controllers/contrtoller");


const router = express.Router();

router.get("/getActiveUser", getActiveUsers);
router.get("/getAllTransactions", getAllTransactions);

module.exports = router;
