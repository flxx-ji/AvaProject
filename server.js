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

//Connexion à la base de donnée
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

//Route basique pour verification du fonctionnement du server
app.get('/', (req, res) => res.send('API is running....'));

//port
const PORT = process.env.PORT || 3000;

//Démarage du server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));