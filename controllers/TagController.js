// Import de OP permettant l'utilisation d'opérateur logique sql
const { Op } = require("sequelize");
// Import des modeles à utiliser
const User = require("../models/User");
const Tag = require("../models/Tag");
const ListVideo = require("../models/ListVideo");
const ListImage = require("../models/ListImage");
// import de la librairie de tocket et du SECRET
const SECRET = "aslkdjlkaj10830912039jlkoaiuwerasdjflkasd";
const jwt = require("jsonwebtoken");

exports.createTag = (req, res, next) => {
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
  // création de la ligne
  Tag.create({
    tag: tag,
  })
    .then((result) => {
      res.status(201).json({
        result,
        success: true,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.destroyTag = (req, res, next) => {
  id = req.body.tagId;
  console.log(id);
  Tag.destroy({ where: { id: id } })
    .then((result) => {
      res.status(202).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
// récupération de toutes les Tags bookmark & tag associé
exports.allTag = (req, res, next) => {
  userId = req.body.userId;
  Tag.findAll({
    attributes: ["tag", "id"],
    [Op.and]: [{
      include: [
        ({
          model: ListVideo,
          where: { userId: userId },
        },
        {
          model: ListImage,
          where: { userId: userId },
        })
      ],
    }],
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

exports.updateTag = (req, res, next) => {
  const tagId = req.body.tagId;
  const newTag = req.body.newTag;
  Tag.update(
    {
      tag: newTag,
    },
    {
      where: { id: tagId },
    }
  )
    .then((tag) => {
      res.status(202).json({
        message: "updated",
        tag,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
