module.exports = (sequelize, Sequelize) => {
    const Compte = sequelize.define("comptes", {
      nom: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },

    });
  
    return Compte;
  };
  