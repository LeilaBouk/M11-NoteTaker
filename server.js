// Chosen Port
const PORT = process.env.port || 3001;

// Packages required
const express = require('express');
const path = require('path');
const fs = require("fs");

const app = express();

// Require the database & routes
const noteData = require("./db/db.json");
const router = require("./routes/noteRoute");

const uuid = require('../helpers/uuid');

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router)

// Serves static files from the public folder
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// PORT
app.listen(PORT, () =>
  console.log(`Now listening on http://localhost:${PORT}`)
);