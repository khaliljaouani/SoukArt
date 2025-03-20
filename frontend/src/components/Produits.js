// src/components/Produit.js
import React, { useState, useEffect } from 'react';

const Produit = () => {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        // Récupérer les produits depuis l'API
        fetch('http://localhost:3001/produits')
            .then((response) => response.json())
            .then((data) => setProduits(data))
            .catch((err) => console.error('Erreur de récupération des produits:', err));
    }, []);

    return (
        <div>
            <h2>Liste des produits</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nom du Produit</th>
                        <th>Prix</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.map((produit) => (
                        <tr key={produit._id}>
                            <td>{produit.nom}</td>
                            <td>{produit.prix}€</td>
                            <td>{produit.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Produit;
