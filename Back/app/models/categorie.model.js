module.exports = (sequelize, Sequelize) => {
    const Categorie = sequelize.define("categories", {
      nom: {
        type: Sequelize.STRING
      },


    });
  
    return Categorie;
  };
  