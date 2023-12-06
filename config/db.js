const mongoose = require("mongoose");

const connectDB = async() => {
    mongoose.connect("mongodb://0.0.0.0:27017/nodecsv").then(() => console.log("Connection Succesfull")).catch((error) => console.log(error))
};

module.exports = connectDB;