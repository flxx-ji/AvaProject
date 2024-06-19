const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

//Chargement des variables d'environement
dotenv.config();

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Connexion à la base de données
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI,  );
        console.log('MongoDB connected');
    }catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

 //Routes ** importation du ficher routes.js
 const routes = require('./routes');
 //Toutes les routes importées seront préfixées de '/api'
 app.use('/api', routes);

 //Gestionnaire d'erreur, affichera un message d'erreur dans la console avec le status 500
 app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'il y a quelque chose de cassé'})
 })
//port
const PORT = process.env.PORT || 3000;

//Démarage du server avec un message 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));