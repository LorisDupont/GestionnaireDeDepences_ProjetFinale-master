module.exports = (sequelize, Sequelize) => {
    const Solde = sequelize.define("soldes", {
      valeur: {
        type: Sequelize.DECIMAL
      },
      devise: {
          type: Sequelize.STRING
      }


    });
  
    return Solde;
  };
  