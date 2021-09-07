const Sequelize = require( 'sequelize' );

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize( process.env.JAWSDB_URL )
  : new Sequelize( 'nvntr', 'root', 'kcj', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  } );

module.exports = sequelize;