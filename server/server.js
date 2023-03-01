const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./config/connection');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

dbConnection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App running on port localhost:${PORT}!`);
    })
});