// importation de mongoose
const mongoose = require ('mongoose');

const connectDB = async () => {
 // connection à la base de données
    try {
         await mongoose.connect(process.env.MONGODB_URI);

         //si la connexion réussie une msg positif est envoyé
        console.log('MongoDB connected');
    }catch (err) {
        
        //sinon un msg d'erreur s'affichera
        console.error(err.message);
        process.exit(1);

    }
};
// la fonction connectDB est exportée, et elle sera utilisée dans l'application
module.exports = connectDB;