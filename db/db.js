const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect("mongodb+srv://dk9657070:<Deepak@1234>@cluster0.uhvc2fa.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database connected 🫙 🫙 🫙");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
