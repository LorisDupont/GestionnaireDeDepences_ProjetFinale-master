module.exports = (sequelize, Sequelize) => {
    const Type = sequelize.define("types", {
      nom: {
        type: Sequelize.STRING
      },


    });
  
    return Type;
  };
  