 import express from 'express';
  import apiRoutes from './routes/apiRoutes.js';

 const app = express();
 const port = 3000;

 // @ts-ignore
 app.use(express.json());

// @ts-ignore
// @ts-ignore 
 // @ts-ignore
 app.use('/api', apiRoutes);

 // @ts-ignore
 app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
 }); 