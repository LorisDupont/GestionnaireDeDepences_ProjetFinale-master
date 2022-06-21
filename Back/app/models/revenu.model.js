module.exports = (sequelize, Sequelize) => {
    const Revenu = sequelize.define("revenus", {
      nom: {
        type: Sequelize.STRING
      },
      valeur: {
        type: Sequelize.DECIMAL
      },
      type: {
        type: Sequelize.STRING
      }
    });
  
    return Revenu;
  };
  