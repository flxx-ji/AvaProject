const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true, 
        trim: true,
    },
    email: {
        type:String,
        required:true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valide email address'],
    },
    
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid phone number'],
    },

    message: {
        type: String,
        required: true,
        trim: true,
    },
},{ 
    timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;