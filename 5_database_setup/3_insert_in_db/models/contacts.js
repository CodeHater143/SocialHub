const mongoose = require('mongoose');  //required library to create collection in mongodb

//definition of schema 
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        require
    },
    phone:{
        type:String,
        require
    }
});

//create a collection in database named Contacts
const Contact = mongoose.model('Contacts',contactSchema);

//exports Contact to access inside index.js file or for available for server
module.exports = Contact;