// Import des modeles à utiliser
const User = require("../models/User");
const Image = require("../models/ListImage");
const TagImage = require("../models/TagListImage");
const Tag = require("../models/Tag");

// import de la librairie de tocket et du SECRET
const SECRET = "aslkdjlkaj10830912039jlkoaiuwerasdjflkasd";
const jwt = require("jsonwebtoken");

exports.createImage = (req, res, next) => {
  const lien = req.body.lien;
  const titre = req.body.titre;
  const auteur = req.body.auteur;
  const hauteur = req.body.hauteur;
  const largeur = req.body.largeur;
  const tagId = req.body.tagId;
  const userId = req.body.userId;
  Image.create({
    lien: lien,
    titre: titre,
    auteur: auteur,
    hauteur: hauteur,
    largeur: largeur,
    userId: userId,
  })
    .then((result) => {
      console.log(result);
      console.log(tagId);
      TagImage.create({
        tagId: tagId,
        listimageId: result.id,
      });
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
      "id",
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

exports.modifImage = (req, res, next) => {
  const lien = req.body.lien;
  const titre = req.body.titre;
  const auteur = req.body.auteur;
  const hauteur = req.body.hauteur;
  const largeur = req.body.largeur;
  const mediaId = req.body.mediaId;
  Image.update(
    {
      lien: lien,
      titre: titre,
      auteur: auteur,
      hauteur: hauteur,
      largeur: largeur,
    },
    {
      where: { id: mediaId },
    }
  )
    .then((image) => {
      res.status(202).json({
        message: "updated",
        image,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
