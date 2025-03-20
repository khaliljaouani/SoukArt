import React from 'react';
import ProduitsList from './components/Produits';

const App = () => {
    return (
        <div>
            <h1>Bienvenue sur SoukArt</h1>
            <ProduitsList />  {/* Affichage de la liste des produits */}
        </div>
    );
};

export default App;
