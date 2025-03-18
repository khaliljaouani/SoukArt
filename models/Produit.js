const mongoose = require('mongoose');

const ProduitSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    quantite: { type: Number, required: true },
    statut: { type: String, enum: ['validé', 'en attente'], required: true }
});

module.exports = mongoose.model('Produit', ProduitSchema);
