const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://khaliljaouani29:Khaliljaouani29@cluster0.5nbg9.mongodb.net/SoukArt', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connecté : ${conn.connection.host}`);
    } catch (error) {
        console.error('Erreur de connexion à MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;


