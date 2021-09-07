const Inventor = require( './inventor' );
const Invention = require( './invention' );

Inventor.hasMany( Invention, {
  foreignKey: 'id',
} );

Invention.belongsTo( Inventor, {
  foreignKey: 'inventor_id',
  onDelete: 'CASCADE'
} );



module.exports = { Inventor, Invention }