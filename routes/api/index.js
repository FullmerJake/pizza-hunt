// We've already set up the export for our router instance in pizza-routes.js
// We'll hook them into the entire server here. 

const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;