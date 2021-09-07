const router = require( 'express' ).Router();
const inventorRoutes = require( './inventor-api-routes' );
const inventionsRoutes = require( './inventions-api-routes' );

router.use( '/inventors', inventorRoutes );
router.use( '/inventions', inventionsRoutes );

module.exports = router;