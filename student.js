// Importation des modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialisation de l'application Express
const app = express();
const port = 3000;

// Middleware pour parser les données JSON
app.use(bodyParser.json());

// Données initiales d'un étudiant
let etudiant = { id: 1, name: 'toto', age: 29, email:'toto@groupeisi.com' };

// Route pour obtenir les informations de l'étudiant
app.get("/etudiant", function(req, res) {
    res.send(etudiant);
});

// Route pour créer un nouvel étudiant
app.post("/etudiant", function(req, res) {
    const newEtudiant = req.body;
    newEtudiant.id = Math.floor(Math.random() * 1000) + 1;
    etudiant = newEtudiant;
    res.send("Étudiant ajouté avec succès !");
});

// Route pour mettre à jour les informations d'un étudiant
app.put("/etudiant/:id", function(req, res) {
    const id = parseInt(req.params.id);
    const updatedEtudiant = req.body;
    if (etudiant.id === id) {
        etudiant = { ...etudiant, ...updatedEtudiant };
        res.send("Informations de l'étudiant mises à jour avec succès !");
    } else {
        res.status(404).send("Étudiant non trouvé !");
    }
});

// Route pour supprimer un étudiant
app.delete("/etudiant/:id", function(req, res) {
    const id = parseInt(req.params.id);
    if (etudiant.id === id) {
        etudiant = {};
        res.send("Étudiant supprimé avec succès !");
    } else {
        res.status(404).send("Étudiant non trouvé !");
    }
});

// Démarrage du serveur
app.listen(port, function() {
    console.log(`Serveur démarré sur le port ${port}`);
});
