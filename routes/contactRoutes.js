const express = require('express');
const { createContact, getAllContacts } = require('../controller/contactController');

const router = express.Router();

router.post('/contacts', createContact);
router.get('/contacts', getAllContacts);

module.exports = router;