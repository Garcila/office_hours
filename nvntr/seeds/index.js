const seedInventors = require( './inventors-seeds' );
const seedInventions = require( './inventions-seeds' );

const sequelize = require( '../config/connection' );

const seedNvntr = async () => {
  await sequelize.sync( { force: true } );
  console.log( `🗄🗄🗄 Database in place 🗄🗄🗄 
  
  `);

  await seedInventors();
  console.log( `🦄🦄🦄 Inventors populated 🦄🦄🦄
  
  ` );

  await seedInventions();
  console.log( `💡💡💡 Inventions populated 💡💡💡
  
  `);

  process.exit( 0 );
};

seedNvntr();