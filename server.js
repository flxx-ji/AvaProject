 //Importing necessary modules and files for the server
 
 import express from 'express';
 //express framework is used for handling server and routing
 import contactRoutes from './routes/contactRoutes.js';
 //Routes is used for handling contact form submissions
 import cors from 'cors';
 //Cors middleware is used for enabling Cross-Origin ressource sharing
 import apiRoutes from './routes/apiRoutes.js';
 //General API routes 
 import path from 'path';
 //Module used for handling file and directory path


//Initializing the Express app
 const app = express();
 //The server's port that listen on
 const port = 3000;
 

 //Serving static files from the "public" directory
 app.use(express.static(path.join(process.cwd(), 'public')));
  
 //Middleware to parse incoming JAON request into JavaScript objects
 //This is important for handling JSON data sent in request
 app.use(express.json());

 //Enabling CORS for all requests to allow requests from differents origins
 app.use(cors());

//Route handlers
 //Mounting the apiRoutes at '/api' so that all routes in apiRoutes will start with '/api/
 app.use('/api', apiRoutes);

 //Mounting the contactRoutes at '/api' as well, so contact routes are accessible under '/api'
 app.use('/api', contactRoutes);

 //404 Error handling middleware
 //This catches all requests to undefined reoutes and returns a 404 error in JSON format
 app.use((req, res, next) => {
   res.status(404).json({ error: 'Not Found'});
 })

 //Sarting the server and listerning for requests
 app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
 }); 