module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    prenom: {
      type: Sequelize.STRING
    },
    nom: {
      type: Sequelize.STRING
    },
    datedenaissance: {
      type: Sequelize.DATEONLY
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    salaire: {
      type: Sequelize.DECIMAL
    },
    genre: {
      type: Sequelize.STRING
    }
  });

  return User;
};
