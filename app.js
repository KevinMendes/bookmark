// import de express pour créer un serveur plus facilement
const express = require("express");
// librarie de gestion des cors
const cors = require("cors");
// import des routes
const videoRoute = require("./routes/listVideo");
const imageRoute = require("./routes/listImage");
const tagRoute = require("./routes/tag");
const userRoute = require("./routes/user");
// Body parser pour parser les données de l'app front
const bodyParser = require("body-parser");
// Import de l'ORM
const sequelize = require("./utils/database");

//*****************************************************/
//****************IMPORT DES MODELS********************/
const User = require("./models/User");
const ListVideo = require("./models/ListVideo");
const ListImage = require("./models/ListImage");
const Tag = require("./models/Tag");
const TagListImage = require("./models/TagListImage");
const TagListVideo = require("./models/TagListVideo");
/******************************************************/

const app = express();
// Utilisation du module de gestion des cors
app.use(cors({credentials: true, origin: true}));
// Utilisation de bodyparser
// On limite toutes entrées à 10mb
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

//*****************************************************/
//*******************ROUTAGE***************************/
app.use("/Video", videoRoute);
app.use("/Image", imageRoute);
app.use("/Tag", tagRoute);
app.use("/User", userRoute);
/******************************************************/

// Synchronisation de la BDD et sequilize
//******************************************/
//***Création des relations de contrainte***/
//**********Table Many to Many**************/

// La table Tag est lié à listvideo et listimage à travers les tables intermédiaires
ListVideo.belongsToMany(Tag, { through: TagListVideo });
ListImage.belongsToMany(Tag, { through: TagListImage });
Tag.belongsToMany(ListVideo, { through: TagListVideo });
Tag.belongsToMany(ListImage, { through: TagListImage });
/***************************************************/
/********************One to One*********************/

User.hasOne(ListVideo);
ListVideo.belongsTo(User);

User.hasOne(ListImage);
ListImage.belongsTo(User);

/****************Fin des contraintes****************/

sequelize
  .sync({
    // force à true permet de forcer la réinitialisation complète des tables -> cela permet de drop toutes
    // les tables puis de les créer à nouveau décotter uniquement pour reset!
    // force: true
  })
  .then((result) => {
    // on écoute sur le port 8000
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
