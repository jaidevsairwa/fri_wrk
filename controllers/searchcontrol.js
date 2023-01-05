const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const Fruit = require("../models/model");

const get_search = function(req,res){
  res.render("search",{empty : null, idnn:[]});
};


const result = function(req,res){
    const idname=req.body.IDname;

        Fruit.find({name:idname},function(err,found,next){
          if(err)
          return next(err);
          if(found.length){
            res.render("search",{empty:null,idnn: found});
          }
          else {
            res.render("search",{empty : "No data Found", idnn:[]});
      }
  });
};


module.exports = {
    get_search,
    result
};
