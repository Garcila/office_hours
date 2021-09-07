const { Model, DataTypes } = require( 'sequelize' );
const sequelize = require( '../config/connection' );

class Invention extends Model { }

Invention.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    invention_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    inventor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'inventors',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    modelName: 'invention',
  }
);

module.exports = Invention;