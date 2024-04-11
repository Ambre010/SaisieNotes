/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rfrouin',
    password: 'Drfgthju63-',
    database: 'rfrouin',  
});

connection.connect((err) => {
    if(err){
        console.error("Erreur de connexion à la BDD: " + err);
        return;
    }
    console.log("Connexion réussie avec la bdd")
});

connection.query("SELECT * FROM etudiant", (err, results) => {
    if(err){
        console.error('Erreur lors de la récupération de la BDD : ', err)
        return;
    }
    console.log("Les données sont : ", results)
})
/*
app.get('/', (req, res) => {
    connection.query('SELECT * FROM etudiant', (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des données :', err);
            res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
            return;
        }
        res.json(results);
    });
});*/