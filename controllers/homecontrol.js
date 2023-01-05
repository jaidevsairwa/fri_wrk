const express = require("express");

// ------------------------  home page -----------------------------
const get_index = function(req,res){
    res.render("index");
};

const get_home = function(req,res){
    res.render("index");
};

// ------------------------ exports  -----------------------------

module.exports = {
    get_index,
    get_home,
};
