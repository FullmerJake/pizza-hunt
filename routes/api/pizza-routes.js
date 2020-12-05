const router = require('express').Router();

// We don't have to import the entire object and having to write pizzaController.getAllPizza()
// We can destructure the method names out of the imported object and use those names directly. 
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

//set up Get all and POST at /api/pizzas
router
    .route('/')
    // because we set up these methods to accept req and res, we can do this abstraction
    .get(getAllPizza)
    .post(createPizza);

//set up GET one, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;