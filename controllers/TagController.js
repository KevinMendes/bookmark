// Import de OP permettant l'utilisation d'opérateur logique sql
const { Op } = require("sequelize");
// Import des modeles à utiliser
const User = require("../models/User");
const Tag = require("../models/Tag");
const ListVideo = require("../models/ListVideo");
const ListImage = require("../models/ListImage");
const TagImage = require("../models/TagListImage");
const TagVideo = require("../models/TagListVideo");
// import de la librairie de tocket et du SECRET
const SECRET = "aslkdjlkaj10830912039jlkoaiuwerasdjflkasd";
const jwt = require("jsonwebtoken");

exports.createTagVideo = (req, res, next) => {
  const tag = req.body.tag;
  const listVideoId = req.body.mediaId;
  Tag.create({
    tag: tag,
  })
    .then((result) => {
      TagVideo.create({
        tagId: result.id,
        listimageId: listVideoId,
      });
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

exports.createTagImage = (req, res, next) => {
  const tag = req.body.tag;
  const listImageId = req.body.mediaId;
  Tag.create({
    tag: tag,
  })
    .then((result) => {
      TagImage.create({
        tagId: result.id,
        listimageId: listImageId,
      });
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

exports.createTagVideo = (req, res, next) => {
  const tag = req.body.tag;
  const listVideoId = req.body.mediaId;
  Tag.create({
    tag: tag,
  })
    .then((result) => {
      TagVideo.create({
        tagId: result.id,
        listvideoId: listVideoId,
      });
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
exports.allTagImage = (req, res, next) => {
  mediaId = req.body.mediaId;
  Tag.findAll({
    attributes: ["tag", "id"],
    include: [
      {
        model: ListImage,
        where: { id: mediaId },
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

exports.allTagVideo = (req, res, next) => {
  mediaId = req.body.mediaId;
  Tag.findAll({
    attributes: ["tag", "id"],
    include: [
      {
        model: ListVideo,
        where: { id: mediaId },
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
