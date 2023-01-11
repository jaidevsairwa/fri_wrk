const express = require("express");
const bodyParser = require("body-parser");
const logger = require("../controllers/logger");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const Fruit = require("../models/model");

const get_search = function(req,res){
  res.render("search",{empty : null, idnn:[]});
    logger.log("info", "search page");
};


const result = function(req,res){
const idname=req.body.IDname;

Fruit.find({name:idname},function(err,found,next){
    if(err){
        logger.log("error occured");
        return next(err);
    }
    if(found.length){
        res.render("search",{empty:null,idnn: found});
        logger.log("info", "data retrieved");
    }
    else {
        res.render("search",{empty : "No data Found", idnn:[]});
        logger.log("warn", "no data found");
      }
  });
};


module.exports = {
    get_search,
    result
};
