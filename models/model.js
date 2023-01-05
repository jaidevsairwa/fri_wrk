const express = require("express");
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const fruitSchema = new schema({
  name:{
    type:String,
     required:[true,"name required"]
   },
    rating:Number
    ,
     review:String
   });

const Fruit= mongoose.model("Fruit",fruitSchema);
// const fruit= new Fruit ({name:"apple", rating: 9,review: "noice"});
// fruit.save();


//--------------- exports ------------

module.exports = Fruit;
