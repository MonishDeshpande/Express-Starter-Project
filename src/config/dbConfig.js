const mongoose = require("mongoose");
const serverConfig = require("./serverConfig");

// The below function is used to connect to the MongoDB Server
async function connectDB() {
  try {
    await mongoose.connect(serverConfig.DB_URL);
    console.log("Sucessfully Connected to the MongoDB Server ....");
  } catch (error) {
    console.log("Failed to connect to the MongoDB Server ....");
    console.log(error);
  }
}
module.exports = connectDB;
