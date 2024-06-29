const { default: mongoose } = require("mongoose");
const { Mongo_Uri } = require("../config");

let connected;

async function connectDb() {

  if (connected) {
    return;
  }
  try {
    const res = await mongoose.connect(Mongo_Uri);
    if (res) {
      console.log(
        "========================= DATABASE CONNECTED ===================== "
      );
      connected = true;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb;
