const express = require("express");
const user = express();
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const userController = require("../controller/userController");

user.use(bodyParser.urlencoded({extended : true}));

user.use(express.static(path.resolve(__dirname, "public")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

user.post("/", upload.single("file"), userController);

module.exports = user;