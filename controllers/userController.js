// Librarie de gestion de token
const jwt = require("jsonwebtoken");
// Librairie pour l'encryption du mdp
const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
// Code de sécurisation pour le token
const SECRET = require("../utils/secret");
console.log(SECRET);
// Récupération du model
const User = require("../models/User");

exports.createAccount = async (req, res, next) => {
  const surname = body.req.surname;
  const email = body.req.email;
  const password = await bcrypt.hash(req.body.password, 12);

  // Vérification de l'existance de l'user dans la BDD
  const user = await User.findOne({ where: { email } });
  if (user) {
    if (user.email == email) {
      res.status(200).json({
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
      .then((res) => {
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
  const password = req.body.password;
  const user = await User.findOne({ where: { email } });
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
        message: "Mot de passe incorrect",
      });
    }
    if (user && valid) {
      jwt.sign(
        {
          email: user.email,
          userId: user.id,
        },
        SECRET,
        { expiresIn: "4h" },
        (err, token) => {
          res.status(200).json({
            success: true,
            token,
          });
        }
      );
    }
  }
};