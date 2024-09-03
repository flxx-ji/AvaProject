import express from'express' ;
import { createContact, getAllContacts } from '../controller/contactController.js';

const router = express.Router();

router.post('/contacts', createContact);
router.get('/contacts', getAllContacts);

export default router;