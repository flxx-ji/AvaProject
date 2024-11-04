 import express from 'express';
 import contactRoutes from './routes/contactRoutes.js';
 import cors from 'cors';
 import apiRoutes from './routes/apiRoutes.js';
 import path from 'path';

 const app = express();
 const port = 3000;
 
 app.use(express.static(path.join(process.cwd(), 'public')));
 // @ts-ignore
 app.use(express.json());
 app.use(cors());

// @ts-ignore
// @ts-ignore 
 // @ts-ignore
 app.use('/api', apiRoutes);
 app.use('/api', contactRoutes);

 app.use((req, res, next) => {
   res.status(404).json({ error: 'Not Found'});
 })

 // @ts-ignore
 app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
 }); 