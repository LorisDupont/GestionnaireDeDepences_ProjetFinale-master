const db = require("../models");


exports.create=(compte) => {
   
    return db.comptes.create(compte);
   
   
   
}