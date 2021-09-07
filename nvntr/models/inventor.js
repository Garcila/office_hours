const { Model, DataTypes } = require( 'sequelize' );
const sequelize = require( '../config/connection' );

class Inventor extends Model { }

Inventor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    inventor_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      },
    },
  },
  {
    sequelize,
    modelName: 'inventor',
  }
);

module.exports = Inventor;