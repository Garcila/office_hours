const express = require( 'express' );
const fruits = require( './db/fruits' );
const path = require( 'path' );

const app = express().Router;
const PORT = 3000;

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );
app.use( express.static( 'public' ) );

app.get( '/', ( req, res ) => {
  res.sendFile( path.join( __dirname, '/public/index.html' ) );
} );

app.get( '/api/allFruits', ( req, res ) => {
  res.json( fruits );
} );

app.get( '/api/allFruits/:fruit', ( req, res ) => {
  const desiredFruit = req.params.fruit;

  const foundFruit = fruits.find( fruit => fruit.name === desiredFruit );

  res.json( foundFruit );
} );

app.post( '/api/allFruits', ( req, res ) => {
  const fruitToAdd = req.body;

  fruits.push( fruitToAdd );
  res.json( fruitToAdd );
} );


app.listen( PORT, () => console.log( `listening to your commands on Port ${PORT}` ) );