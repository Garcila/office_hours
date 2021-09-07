const express = require( 'express' );
const path = require( 'path' );

// Our database 🤔
const allFruits = require( './db/fruits' );
const { json } = require( 'express' );

const app = express();
const PORT = 3000;

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );
app.use( express.static( 'public' ) );

// ROUTES
app.get( '/', ( req, res ) => {
  res.sendFile( path.join( __dirname, '/public/index.html' ) );
} );

app.get( '/fruits/:fruit', ( req, res ) => {
  res.sendFile( path.join( __dirname, '/public/oneFruit.html' ) );
} );

app.get( '/api/allFruits', ( req, res ) => {
  res.json( allFruits );
} );

app.get( '/api/allFruits/:fruit', ( req, res ) => {
  const wantedFruit = req.params.fruit.toLowerCase();

  const found = allFruits.find( i => i.name === wantedFruit );

  res.json( found );

} );

app.post( '/api/allFruits', ( req, res ) => {
  const newFruit = req.body;

  fruits.push( newFruit );

  res.json( newFruit );
} )


app.listen( PORT, () => console.log( `Listening on port ${PORT}` ) );

