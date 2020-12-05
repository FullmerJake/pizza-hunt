const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// Tells Mongoose which database to connect to.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
    // Set of Config options Mongoose asks for more information about.
    useFindAndModify: false,
    useNewUrlParser: true,
    useInifiedTopology: true
});

// Use this to log mongo queries being excecuted
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
