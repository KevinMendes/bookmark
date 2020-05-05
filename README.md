# bookmark

# Installation
## Prérequis : 

Nodejs version 12 ou plus.
React version 16 ou plus.
Base de donnée SQL.
yarn

## Mise en place de la base de donnée

Créer une base appelée 'bookmark'

Dans le fichier databse.js situé dans le dossier utils, dans la ligne commençant par `const sequelize = new Sequelize(`

Remplacer 'root' par le nom de l'utilisateur de la table crée;
Remplacer 'Motdepasse!' par le mot de passe associé à cet utilisateur;
Remplacer 'mysql' par le système de gestion de base SQL souhaité;
Remplacer 'localhost' par votre serveur local.

A la racine du dossier taper la commande yarn, puis yarn start.

Dans un nouveau terminal, deplacez vous dans le dossier frontend tapez à nouveau la commande yarn puis yarn start.

## Inscription 

Aucune vérification n'est faite, et la connexion est automatique, vous pouvez utilisez un fakemail.