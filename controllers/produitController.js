const Produit = require('../models/Produit');

// Récupérer tous les produits
exports.getProduits = async (req, res) => {
    try {
        const produits = await Produit.find();
        res.render('produits', { produits });
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        res.status(500).send('Erreur serveur');
    }
};

// Ajouter un produit
exports.ajouterProduit = async (req, res) => {
    const { nom, description, prix, quantite, statut } = req.body;

    try {
        const nouveauProduit = new Produit({
            nom,
            description,
            prix,
            quantite,
            statut
        });

        await nouveauProduit.save();
        console.log('Produit ajouté avec succès');
        res.redirect('/produits');
    } catch (error) {
        console.error('Erreur lors de l\'ajout du produit:', error);
        res.status(500).send('Erreur serveur');
    }
};
