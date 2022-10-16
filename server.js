// Chosen Port
const PORT = process.env.port || 3001;

// Packages required
const express = require('express');
const path = require('path');
const fs = require("fs");

// Require the database
const noteData = require("./db/db.json");

const app = express();

// Middleware stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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