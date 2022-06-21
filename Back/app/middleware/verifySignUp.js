const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail =  (req, res, next) => {



    // Email
    let user =  User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then( user => {
      if (user) {
        return res.status(400).send({
          message: "Email deja utiliser!"
        });
        return;
      }
      next();

  })
    }





checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;
