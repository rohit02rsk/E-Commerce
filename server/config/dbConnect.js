const { default: mongoose } = require("mongoose");
const dbConnect = () => {
  try {
    const url =
      process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/amazon-clone";
    const connection = mongoose.connect(url);
    console.log("Db connected successfully");
  } catch (e) {
    console.log("Db error", e);
  }
};
module.exports = dbConnect;
