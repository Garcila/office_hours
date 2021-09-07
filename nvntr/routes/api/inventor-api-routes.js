const router = require( 'express' ).Router();
const db = require( '../../models' );

router.get( '/', ( req, res ) => {
  db.Inventor.findAll( {
    include: [db.Invention]
  } ).then( dbInventor => {
    res.json( dbInventor );
  } );
} );

router.get( '/:id', ( req, res ) => {
  db.Inventor.findOne( {
    where: {
      id: req.params.id
    },
    include: [db.Invention]
  } ).then( dbInventor => {
    res.json( dbInventor );
  } );
} );

router.post( '/', ( req, res ) => {
  db.Inventor.create( req.body ).then( dbInventor => {
    res.json( dbInventor );
  } );
} );

router.delete( '/:id', ( req, res ) => {
  db.Inventor.destroy( {
    where: {
      id: req.params.id
    }
  } ).then( inventor => {
    console.log( `deleted inventor with id ${inventor}` )
    res.json( inventor );
  } )
    .catch( err => {
      console.log( err );
      res.status( 400 ).json( err );
    } )
} );

module.exports = router;