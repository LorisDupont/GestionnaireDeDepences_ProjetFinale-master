const db = require("../models");
const Comptes = db.comptes;
const Op = db.Sequelize.Op;
const Users = require("../controllers/user.controller")
const compteRepository = require("../repository/compte-repository")
exports.create = (req, res) => {

    if (!req.body.nom) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const compte = {

      nom: req.body.nom,
      description: req.body.description,
  
  
    };

   Comptes.create( compte )
    .then( data => {
        if (req.body.userId){
          Users.findByPk(req.body.userId)
        
          .then(user => {
           data.setUser(user).then(() =>{
            res.send({message: "compte ok"})
           })
           
           
      });
     }
     else{
      data.setUser([1]).then(() =>{
        res.send({message: "compte ok"})
       })
     }
    } )
     .catch(err => {
        res.status(500).send({
          message:
            err.message || "error"
        });
      });
  };

  exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
    Comptes.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "error."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
    Comptes.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `error`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error"
        });
      });
  };

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
