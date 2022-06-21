const db = require("../models");
const Solde = db.solde;
const Op = db.Sequelize.Op;
// Create and Save a new Solde
exports.create = (req, res) => {
   // Validate request
   if (!req.body.valeur) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Solde
  const solde = {

    valeur: req.body.valeur,
    devise: req.body.devise,


  };
  // Save Solde in the database
  Solde.create(solde)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error"
      });
    });
};

// Retrieve all Solde from the database.
exports.findAll = (req, res) => {
    const valeur = req.query.valeur;
    var condition = valeur ? { valeur: { [Op.like]: `%${valeur}%` } } : null;
    Solde.findAll({ where: condition })
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
// Find a single Solde with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Solde.findByPk(id)
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
// Update a Solde by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Solde.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Solde was updated successfully."
        });
      } else {
        res.send({
          message: `error`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Solde with id=" + id
      });
    });
};
// Delete a Solde with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Solde.destroy({
    where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Solde was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Solde with id=${id}. Maybe Solde was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Solde with id=" + id
      });
    });
};
// Delete all Soldes from the database.
exports.deleteAll = (req, res) => {
    Solde.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Soldes were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Soldes."
          });
        });
};
