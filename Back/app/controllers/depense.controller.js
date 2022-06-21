const db = require("../models");
const Depense = db.depenses;
const Op = db.Sequelize.Op;
const Solde = db.solde
// Create and Save a new Depense
exports.create = (req, res) => {
   // Validate request
   if (!req.body.nom) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Depense
  const depense = {
    nom: req.body.nom,
    description: req.body.description,
    valeur: req.body.valeur,
    date: req.body.date,
    type: req.body.type,
    genre:  req.body.genre,

  };
  // Save Depense in the database
  Depense.create(depense)
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
