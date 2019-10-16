const mongoose = require('mongoose'); //required library to connect database

mongoose.connect('mongodb://localhost/contact_list_db');//connection to database
const db = mongoose.connection; //how to acquired connection to db

//how to check error in connection
db.on('error',console.error.bind(console,'error in connection to db'));

//successful connection and print success message
db.once('open',function(){
    console.log('successfully connected to mongodb');
});