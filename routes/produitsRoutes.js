const express = require('express');
const router = express.Router();
const Produit = require('../models/Produit'); // Modèle Produit

// Route pour afficher les produits
router.get('/', async (req, res) => {
    try {
        const produits = await Produit.find(); // Récupérer tous les produits
        res.render('produits', { produits }); // Afficher la vue produits.ejs
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;
