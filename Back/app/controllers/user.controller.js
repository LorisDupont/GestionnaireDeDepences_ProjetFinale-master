// exports.allAccess = (req, res) => {
//   res.status(200).send("Public Content.");
// };

// exports.userBoard = (req, res) => {
//   res.status(200).send("User Content.");
// };

// exports.adminBoard = (req, res) => {
//   res.status(200).send("Admin Content.");
// };


const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
   res.status(400).send({
     message: "Content can not be empty!"
   });
   return;
 }
 // Create a User
 const user = {
   nom: req.body.nom,
   prenom: req.body.prenom,
   datedenaissance: req.body.datedenaissance,
   email: req.body.email,
   password: req.body.password,
   genre:  req.body.genre,
   salaire: req.body.salaire

 };
 // Save User in the database
 User.create(user)
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


// Retrieve all user from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
    User.findAll({ where: condition })
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
// Find a single user with an id
exports.findByPk = (req, res) => {
    const id = req.params.id;
    User.findByPk(id,{
      where: { id: req.params.userId },
      attributes: { exclude: ["password"] },
      include: [
        {
          model: db.role,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: db.comptes,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: db.genre,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },

      ],
    })
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
// Update a user by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "user was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating user with id=" + id
      });
    });
};
// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
    where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};
// Delete all User from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} User were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all User."
          });
        });
};



