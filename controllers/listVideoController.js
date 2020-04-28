// Import des modeles à utiliser
const User = require("../models/User");
const Video = require("../models/ListVideo");
const TagVideo = require(".../models/ListVideo");

// import de la librairie de tocket et du SECRET
const SECRET = require("../utils/secret");
const jwt = require("jsonwebtoken");

exports.createVideo = (req, res, next) => {
  const lien = req.body.lien;
  const titre = req.body.titre;
  const auteur = req.body.auteur;
  const hauteur = req.body.hauteur;
  const largeur = req.body.largeur;
  const duree = req.body.duree;
  const tag = req.body.tag;
  // Middleware servant à vérifier la présence du token
  // avant chaque action sur la BDD autre que la connexion
  // jwt.verify = (req, res, next) => {
  //   try {
  //     let decoded = jwt.verify(token, SECRET, {
  //       algorithme: ["HS256"],
  //     });
  //     console.log(decoded);
  //   } catch (err) {
  //     console.log(err, err.message);
  //     return false;
  //   }
  // création de l'entrée dans la table listvideo
  Video.create({
    lien: lien,
    titre: titre,
    auteur: auteur,
    hauteur: hauteur,
    largeur: largeur,
    duree: duree,
  })
    .then((res) => {
      res.status(201).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.destroyVideo = (req, res, next) => {
  id = req.body.id;
  Video.destroy({ where: id })
    .then((res) => {
      res.status(202).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
