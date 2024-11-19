//Importing the Express library to create a router 
import express from'express' ;
//Importing the createContact function from th contactController
import { createContact } from '../controller/contactController.js';
//Creating a new router instance
const router = express.Router();


//Route to handle POST request to '/contacts'
//When a POST request is made to '/api/contacts' the createContact function will be called
router.post('/contacts', createContact);

//Exporting the router to be used in other parts of the application
export default router;