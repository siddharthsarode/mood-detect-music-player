const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb connected");
  } catch (err) {
    console.log("Mongodb connection failed!", err);
  }
};

module.exports = { connectDB };
