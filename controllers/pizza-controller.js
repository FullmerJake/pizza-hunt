const { Pizza } = require('../models');
const { db } = require('../models/Pizza');

const pizzaController = {
    //GET all pizza
    getAllPizza(req, res) {
        // uses Mongoose find() method to find all
        Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    //GET one pizza by id
    getPizzaById({ params }, res) {
        // uses Mongoose findOne() method to find by _id
        Pizza.findOne({ _id: params.id })
        .then(dbPizzaData => {
            // if no pizza is found, send 404 message
            if (!dbPizzaData) {
                res.status(404).json({ message: 'No Pizza found with this id!'});
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    //POST a new pizza
    // Destructures {body} from the request data. 
    createPizza({ body }, res) {
        // Mongoose create() method
        Pizza.create(body)
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.status(400).json(err));
    },

    //PUT request, updating pizza by id
    updatePizza({ params, body }, res) {
        // Mongoose method .findOneAndUpdate() method. 
        Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbPizzaData => {
            if(!dbPizzaData) {
                res.status(404).json({message: 'No pizza found with this is!'});
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    },

    //Delete request, delete pizza
    deletePizza({ params }, res) {
        Pizza.findOneAndDelete({_id: params.id})
        .then(dbPizzaData => {
            if(!dbPizzaData) {
                res.status(404).json({message: 'No pizza found with this id'});
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => console.log(400).json(err));
    }

};

module.exports = pizzaController;