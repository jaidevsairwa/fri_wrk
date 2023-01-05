const express = require("express");
const bodyParser = require("body-parser");
const {Parser} = require("json2csv");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const Fruit = require("../models/model");


const get_download = function(req,res){
  res.render("download");
};

const download = function(req,res){
          Fruit.find({},function(err,found){
            if(err)
                throw err;
            else{
            const fields = ['id','name', 'rating','review'];
            const opts = { fields };
            const json2csvParser = new Parser(opts);
            const csv = json2csvParser.parse(found);
            res.attachment("mongodata.csv");
            res.send(csv);
          }
      });
};

module.exports = {
    get_download,
    download
};
