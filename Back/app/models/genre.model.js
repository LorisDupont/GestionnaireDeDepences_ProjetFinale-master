module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define("genres", {
      nom: {
        type: Sequelize.STRING
      },


    });
  
    return Genre;
  };
  