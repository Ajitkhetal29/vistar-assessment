const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB } = require("./config/mongodb");
const Routes = require("./routes/routes");

const app = express();
app.use(cors());

connectDB();

app.use("/", Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
