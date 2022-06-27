const config = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    logging: config.logging,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync({alter: true})
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.solde = require("../models/solde.model")(sequelize, Sequelize);
db.categorie = require("../models/categorie.model")(sequelize, Sequelize);
db.type = require("../models/type.model")(sequelize, Sequelize);
db.revenu = require("../models/revenu.model")(sequelize, Sequelize);
db.genre = require("../models/genre.model")(sequelize, Sequelize);
db.depenses = require("../models/depenses.model")(sequelize, Sequelize);
db.comptes = require("./compte.model.js")(sequelize, Sequelize);



// ------------------------------------------------ROLE--------------------------------------------------------

db.role.belongsToMany(db.user, { through: "user_roles" });
db.user.belongsToMany(db.role, { through: "user_roles" });
// ------------------------------------------------GENRE--------------------------------------------------------
// db.genre.belongsToMany(db.user, {
//   through: "user_genres",
//   foreignKey: "genreId",

// });
// db.user.belongsToMany(db.genre, {
//   through: "user_genres",
//   foreignKey: "userId",

// });
// ------------------------------------------------COMPTE--------------------------------------------------------
db.comptes.belongsTo(db.user, {
  foreignKey:"userId",

})
db.user.hasOne(db.comptes,{
  foreignKey: "userId",

})
// ------------------------------------------------SOLDE_COMPTE--------------------------------------------------------
db.solde.hasOne(db.comptes)
db.comptes.belongsTo(db.solde

)

// ------------------------------------------------User_Compte--------------------------------------------------------
db.solde.hasOne(db.comptes)
db.comptes.belongsTo(db.solde

)
// ------------------------------------------------REVENU--------------------------------------------------------
// db.revenu.hasOne(db.user, {
//   through: "user_revenus",
//   foreignKey:"revenuId",

// })
// db.user.belongsTo(db.revenu,{
//   through: "user_revenus",
//   foreignKey: "userId",

// })
// ------------------------------------------------DEPENSE--------------------------------------------------------
// db.depenses.hasOne(db.user, {
//   through: "user_depenses",
//   foreignKey:"depensesId",

// })
// db.user.belongsTo(db.depenses,{
//   through: "user_depenses",
//   foreignKey: "userId",

// })
// ------------------------------------------------TYPE_DEPENSES--------------------------------------------------------
// db.type.hasOne(db.depenses, {
//   through: "depense_types",
//   foreignKey:"typeId",

// })
// db.depenses.belongsTo(db.type,{
//   through: "depenses_types",
//   foreignKey: "depensesId",

// })
// ------------------------------------------------CATEGORIE_DEPENSES--------------------------------------------------------
// db.categorie.belongsToMany(db.depenses, {
//   through: "depense_categories",
//   foreignKey:"categorieId",

// })
// db.depenses.belongsToMany(db.categorie,{
//   through: "depenses_categories",
//   foreignKey: "depensesId",

// })
// ------------------------------------------------PRODUIT_DEPENSES--------------------------------------------------------
// db.produit.belongsToMany(db.depenses, {
//   through: "depense_produits",
//   foreignKey:"produitId",

// })
// db.depenses.belongsToMany(db.produit,{
//   through: "depenses_produits",
//   foreignKey: "depensesId",

// })

db.ROLES = ["user", "admin"];

module.exports = db;
