const { DataTypes,Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemons', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.FLOAT,
    },
    attack: {
      type: DataTypes.FLOAT,
    },
    defense: {
      type: DataTypes.FLOAT,
    },
    speed: {
      type: DataTypes.FLOAT,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/230px-Pokebola-pokeball-png-0.png"
    },
    height: {
      type: DataTypes.FLOAT,
    },
    weight: {
      type: DataTypes.FLOAT,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};