const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/to-do-list', {
    useNewUrlParser: true
});


const app = express();
app.use(express.json());
 
app.use('/', require('./routes/index'));
module.exports = app;