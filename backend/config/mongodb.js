const { MongoClient } = require("mongodb");
const dotenv = require('dotenv')
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("Database connected");
  } catch (error) {
    console.error("DB connection error:", error.message);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };
