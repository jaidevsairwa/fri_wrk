const express = require("express");
const mongoose = require('mongoose');
const homeroutes = require("./routes/homeroute");
const searchroutes = require("./routes/searchroute");
const downloadroutes = require("./routes/downloadroute");

const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));

app.use(homeroutes); // routes
app.use(searchroutes);
app.use(downloadroutes);

// -----mongodb-----
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/testdb",function(err) {
  if(err){
    console.log("unable to connect to mongoDB server :", err);
  }
  else
    console.log("mongoDB connected");
});


//--------- server port
app.listen(3000,function(){
  console.log("server is working");
});

//------------ export --------
module.exports = app;
