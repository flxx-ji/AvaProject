import express  from 'express';
import mongoose  from 'mongoose';
import dotenv  from 'dotenv';
import bodyParser  from 'body-parser';
import cors  from 'cors';
import contactRoutes  from './routes/contactRoutes.js';

//Chargement des variables d'environement
dotenv.config();

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Connexion à la base de données
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    }catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

  //Routes
 app.use('/api', contactRoutes);

 //vérification du serveur

 app.get('/', (req, res) => res.end('API fonctionnent'));

 //Gestionnaire d'erreur, affichera un message d'erreur dans la console avec le status 500
 app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'il y a quelque chose de cassé'})
 })
//port
const PORT = process.env.PORT || 3000;

//Démarage du server avec un message 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));