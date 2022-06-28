const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Genre = db.genre;
const Role = db.role;


const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { privateKey } = require("../config/auth.config");


exports.signup =  (req, res) => {
  // Enregistrer user dans db
  try {
    const user =  User.create({

      prenom: req.body.prenom,
      nom: req.body.nom,
      datedenaissance: req.body.datedenaissance,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      salaire: req.body.salaire,
      genre: req.body.genre,

    });


    if (req.body.roles) {
      const roles =  Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles,
          },
        },
      });

      const result = user.setRoles(roles);
      if (result) res.send({ message: "User registered successfully!" });
    } else {
      // user role = 1
      const result = user.setRoles([1]);
      if (result) res.send({ message: "User registered successfully!" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};




exports.signin = (req, res) => {    
    User.findOne({
      where: {
        email: req.body.email,
      },
      
    })
    .then( user => {
      if (!user) {
        return res.status(404).send({ message: "email Not found." });
      }
  
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
  
        
      );
  
      // res.status(200).json("connecter")
      
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

  
      const token = jwt.sign({ id: user.id }, "test" ,{
        expiresIn: 86400, // 24 heures
  
  
      });
      // res.status(200).json({token})
  console.log(token);
  
      let authorities = [];
  
      const roles =  user.getRoles();
  
  
      for (let i = 0; i < roles.length; i++) {
        authorities.push("ROLE_" + roles[i].name.toUpperCase());
      }
      console.log('toto');
      res.status(200).send({
        id: user.id,
        prenom: user.prenom,
        nom: user.nom,
        email: user.email,
        roles: authorities,
        role : roles,
        accessToken: token
      });
  
      // req.session.token = token;
  
     
    })
    .catch(err => { 
      res.status(500).send({message: err.message})
    })
    }

    


exports.signout =  (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
}
