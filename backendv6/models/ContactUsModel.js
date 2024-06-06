const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
   name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    phone:{
        type: String,
        trim: true
    },
    subject :{
        type: String,
        trim: true
    },
    message:{
        type: String,
        trim: true
    },
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;