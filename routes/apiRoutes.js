  //Importing the Express library to create a router 
  import express  from 'express';
  //Importing contact routes to handle contact-related endpoints
  import contactRoutes from './contactRoutes.js'
   
  //Creatin a new router instance
  const router = express.Router();

  //Setting up the contact routes under the '/contacts' path
  //Any request to 'api/contacts' will be forwarded  to contactRoutes
  router.use('/contacts', contactRoutes);
  
   //Exporting the router to be used in other parts of the app
    export default router;