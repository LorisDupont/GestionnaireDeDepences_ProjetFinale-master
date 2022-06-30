const db = require("../models");
const Depense = db.depenses;
const Op = db.Sequelize.Op;
const Solde = db.solde
// Create and Save a new Depense
exports.create = (req, res) => {
  console.log(req.body);

  if (!req.body.nom) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
    return;
  }
  const depense = {

    nom: req.body.nom,
    valeur: req.body.valeur,
    date: req.body.date,
    type: req.body.type,
    genre: req.body.genre,
    description: req.body.description,
    userId: req.body.userId

  };

  Depense.create( depense )
  .then( data => {
    console.log(req.body);
      if (req.body.userId){
        Users.findByPk(req.body.userId)
      
        .then(user => {
         data.setUser(user).then(() =>{
          res.send({message: "depense ok"})
         })
    });
   }
   else{
    data.setUser([id]).then(() =>{
      res.send({message: "depense ok"})
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

// Retrieve all Depenses from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
    Depense.findAll({ where: condition }, {include: {Solde}})
      .then(data => {
        res.send(data);
        console.log('ok');
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "error."
        });
      });
};
// Find a single Depense with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Depense.findByPk(id)
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
        message: "error"
      });
    });
};
// Update a Depense by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Depense.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Depense was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Depense with id=${id}. Maybe Depense was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Depense with id=" + id
      });
    });
};
// Delete a Depense with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Depense.destroy({
    where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Depense was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Depense with id=${id}. Maybe Depense was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Depense with id=" + id
      });
    });
};
// Delete all Depenses from the database.
exports.deleteAll = (req, res) => {
    Depense.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Depenses were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Depenses."
          });
        });
};
