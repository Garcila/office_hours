const express = require( 'express' );
const sequelize = require( './config/connection' );

const routes = require( './routes' );

const app = express();
const PORT = process.env.PORT || 3000;

const db = require( './models' );

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );

app.use( routes );

sequelize.sync( { force: false } ).then( () => {
  app.listen( PORT, () => {
    console.log( `I hear you on ⚓️ port ${PORT}` )
  } );
} );

