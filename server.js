const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const produitsRoute = require('./routes/produitsRoutes'); // Assure-toi que ce chemin est correct

const app = express();

app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost/soukArt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.log('Erreur de connexion à MongoDB:', err));

// Routes
app.use('/api', produitsRoute); // Assure-toi que /api est bien utilisé ici pour les routes produits

// Route par défaut (facultatif si tu veux que quelque chose s'affiche sur /)
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API SoukArt !');
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
