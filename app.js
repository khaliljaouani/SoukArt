const express = require('express');
const connectDB = require('./config/db');
const produitController = require('./controllers/produitController');
const app = express();
const port = 3001;

// Connexion à MongoDB
connectDB();

// Middleware pour analyser les données JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Permet d'analyser les données du formulaire

// Définir le moteur de rendu sur EJS
app.set('view engine', 'ejs');

// Routes
app.get('/produits', produitController.getProduits);
app.post('/produits/ajouter', produitController.ajouterProduit);

app.get('/produits/ajouter', (req, res) => {
    res.render('ajouter-produit'); // Assure-toi que le fichier ajouterProduit.ejs existe bien dans /views
  });
  

// Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur SoukArt!');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
