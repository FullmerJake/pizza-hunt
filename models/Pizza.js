// We don't need to import the entire mongoose library,
// Here we only need to worry about the Schema contstructor and the model function
const { Schema, model } = require('mongoose');

// Creates a schema, using the Schema constructor imported from Mongoose.
const PizzaSchema = new Schema({
    // Defines the fields with specific data types
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        // JS function
        // If no value is provided when the user creates data
        // Date.now will be executed to proovide a timestamp
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});


//create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;