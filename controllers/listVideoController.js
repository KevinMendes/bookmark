// Import des modeles à utiliser
const User = require("../models/User");
const Video = require("../models/ListVideo");
const TagVideo = require("../models/TagListVideo");
const Tag = require("../models/Tag");

// import de la librairie de tocket et du SECRET
const SECRET = require("../utils/secret");
const jwt = require("jsonwebtoken");

exports.createVideo = (req, res, next) => {
  console.log(req.body);
  const lien = req.body.lien;
  const titre = req.body.titre;
  const auteur = req.body.auteur;
  const hauteur = req.body.hauteur;
  const largeur = req.body.largeur;
  const duree = req.body.duree;
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
  // création de l'entrée dans la table listvideo
  Video.create({
    lien: lien,
    titre: titre,
    auteur: auteur,
    hauteur: hauteur,
    largeur: largeur,
    duree: duree,
    userId: userId,
  })
    .then((result) => {
      const interTable = tagId.map((id) =>
        TagVideo.create({
          tagId: id,
          listvideoId: result.id,
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

exports.destroyVideo = (req, res, next) => {
  id = req.body.id;
  Video.destroy({ where: { id: id } })
    .then((result) => {
      res.status(202).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// récupération de toutes les videos bookmark & tag associé
exports.allVideo = (req, res, next) => {
  const userId = req.body.userId;
  Video.findAll({
    where: {
      userId: userId,
    },
    attributes: [
      "lien",
      "titre",
      "auteur",
      "hauteur",
      "largeur",
      "duree",
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
