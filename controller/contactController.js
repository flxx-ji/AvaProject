import  Contact from '../models/contact.js';

export const createContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        const newContact = new Contact ({name, email, phone, message});
        await newContact.save();

        res.status(201).json({ message: 'Contact information saved successfully'});
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message});
    }
};

export const getAllContacts = async (_req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
     }catch (err)  {
        res.status(500).json({message: 'erreur dans le serveur', error: err.message});
     }
};

 //module.exports = {createContact, getAllContacts};