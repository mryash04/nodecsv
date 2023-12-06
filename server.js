const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT =  8000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is from home side");
});

app.use("/user", require("./routes/userRoute"));

app.listen(PORT, () => console.log("This is listening port from", PORT));