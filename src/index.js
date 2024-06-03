const express = require("express");

const serverConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(serverConfig.PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${serverConfig.PORT}`);
});
