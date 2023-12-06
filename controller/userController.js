const User = require("../models/User");
var Promise = require('bluebird');
var Converter = require('csvtojson').Converter;
Promise.promisifyAll(Converter.prototype);

const converter = new Converter();

const userController = async (req, res) => {
    try{

        converter.fromFile(req.file.path).then((response) => {
            console.log(response);
        });

        return res.send(200).json({msg : "File is importing", isSuccess : true});
    }catch(error){
        res.status(400).json({msg : error.message, isSuccess : false})
    }
};

module.exports = userController;