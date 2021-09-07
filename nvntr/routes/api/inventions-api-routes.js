const router = require( 'express' ).Router();
const db = require( '../../models' );

router.get( '/', ( req, res ) => {
  const query = {};
  if ( req.query.inventor_id ) {
    query.InventorId = req.query.author_id;
  }

  db.Invention.findAll( {
    where: query,
    include: [db.Inventor]
  } ).then( dbInvention => {
    res.json( dbInvention )
  } )
} )

router.get( '/:id', ( req, res ) => {
  db.Invention.findOne( {
    where: {
      id: req.params.id
    },
    include: [db.Inventor]
  } ).then( dbInvention => {
    res.json( dbInvention );
  } );
} );

router.delete( '/:id', ( req, res ) => {
  db.Invention.destroy( {
    where: {
      id: req.params.id
    }
  } ).then( dbInvention => {
    res.json( dbInvention );
  } );
} );

router.put( '/:id', ( req, res ) => {
  db.Invention.update( req.body, {
    where: {
      id: req.body.id
    }
  } ).then( dbInvention => {
    res.json( dbInvention );
  } );
} );

module.exports = router;