// Import des modeles à utiliser
const User = require("../models/User");
const Image = require("../models/ListImage");
const TagImage = require("../models/TagListImage");
const Tag = require("../models/Tag");

// import de la librairie de tocket et du SECRET
const SECRET = "aslkdjlkaj10830912039jlkoaiuwerasdjflkasd";
const jwt = require("jsonwebtoken");

exports.createImage = (req, res, next) => {
  console.log(req.body);
  const lien = req.body.lien;
  const titre = req.body.titre;
  const auteur = req.body.auteur;
  const hauteur = req.body.hauteur;
  const largeur = req.body.largeur;
  const tagId = Array.from(req.body.tagId);
  const userId = req.body.userId;
  console.log(tagId);
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
  // création de l'entrée dans la table listimage
  Image.create({
    lien: lien,
    titre: titre,
    auteur: auteur,
    hauteur: hauteur,
    largeur: largeur,
    userId: userId,
  })
    .then((result) => {
      const interTable = tagId.map((id) =>
        TagImage.create({
          tagId: id,
          listimageId: result.id,
        })
      );
    })
    .then(() => {
      res.status(202).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.destroyImage = (req, res, next) => {
  id = req.body.id;
  Image.destroy({ where: { id: id } })
    .then((result) => {
      res.status(202).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// récupération de toutes les images bookmark & tag associé
exports.allImage = (req, res, next) => {
  const userId = req.body.userId;
  Image.findAll({
    where: {
      userId: userId,
    },
    attributes: [
      "lien",
      "titre",
      "auteur",
      "hauteur",
      "largeur",
      "createdAt",
    ],
    include: [
      {
        model: Tag,
      },
    ],
  })
    .then((result) => {
      res.status(202).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
