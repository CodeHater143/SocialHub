const mongoose = require('mongoose'); //required library to connect with mongodb

//connection with mongodb server 
mongoose.connect('mongodb://localhost/Development_db'); //Development_db is name of database inside mongodb

//acquire connection from database
const db = mongoose.connection;

//check connection is establised or not
db.on('error',console.error.bind(console,'error in connecting to database'));

//successfull message when connection is establised with mongodb
db.once('open',function(){
    console.log('successfully connected to db');
});

//exports connection so that it is available inside other required file (server file-->index.js)
module.exports = db;