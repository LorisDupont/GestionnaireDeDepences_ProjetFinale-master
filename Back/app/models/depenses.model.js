module.exports = (sequelize, Sequelize) => {
  const Depense = sequelize.define("depenses", {
    nom: {
      type: Sequelize.STRING
    },
    valeur: {
      type: Sequelize.DECIMAL
    },
    description: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    categorie: {
      type: Sequelize.STRING
    },

    date: {
      type: Sequelize.DATE
    },
    userId:{
      type: Sequelize.STRING
    }


  });

  return Depense;
};

 