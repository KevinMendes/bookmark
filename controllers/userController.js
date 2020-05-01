// Librarie de gestion de token
const jwt = require("jsonwebtoken");
// Librairie pour l'encryption du mdp
const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
// Code de sécurisation pour le token
const SECRET = "aslkdjlkaj10830912039jlkoaiuwerasdjflkasd";
// Récupération du model
const User = require("../models/User");

exports.createAccount = async (req, res, next) => {
  const surname = req.body.surname;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 12);
  // Vérification de l'existance de l'user dans la BDD
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    if (user.email == email) {
      res.status(201).json({
        success: false,
        message: "Email existant",
        email: email,
      });
    }
  }
  // Sinon on continue
  else {
    User.create({
      surname: surname,
      password: password,
      email: email,
    })
      .then((result) => {
        res.status(200).json({
          success: true,
          message: "Utilisateur créé",
          surname: surname,
        });
      })
      .catch((err) => console.log(err));
  }
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = await req.body.password;
  const user = await User.findOne({ where: { email: email } });
  try {
    if (!user) {
      res.status(200).json({
        success: false,
        message: "Email incorrect",
      });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      res.status(200).json({
        success: false,
        message: "Veuillez vérifier votre email et votre mot de passe",
      });
    }
    if (user && valid) {
      var token2 = jwt.sign({ foo: "bar" }, "shhh");
      jwt.sign(
        { userId: user.id, surname: user.surname, email: user.email },
        SECRET,
        (err, token) => {
          res.status(200).json({
            token,
            success: true,
          });
        }
      );
    }
  } catch (err) {
    console.log(err.message);
  }
};

exports.getUserInfos = async (req, res) => {
  jwt.verify(req.token, SECRET, (err, decoded) => {
    if (err) {
      res.status(200).json({
        success: false,
        message: "Veuillez vous connecter pour accéder à ce contenu",
      });
    } else {
      User.findByPk(decoded.userId)
        .then((user) => {
          res.status(200).json({
            success: true,
            surname: user.surname,
            userId: user.id,
            email: user.email,
          });
        })
        .catch((err) => {
          res.status(403).json({
            success: false,
            message: "Utilisateur non existant",
          });
        });
    }
  });
};


exports.verifyToken = (req,res,next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
        return false;
    }
}
