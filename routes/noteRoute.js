const express = require('express');
const path = require('path');
const fs = require("fs");
const noteData = require("../db/db.json");
const router = express.Router();
const uuid = require('../helpers/uuid.js')

router.get('/api/notes', (req, res) => {
    fs.readFile(noteData).then((data) => res.json(JSON.parse(data)));
    console.log("Note data found 📝")
});

router.post('/api/notes', (req, res) => {
    fs.readFile(noteData).then((data) => res.json(JSON.parse(data)));
    const { title, text, id } = req.body;
    if (title && text && id) {
        const userNote = {
            title,
            text,
            id: uuid(),
        }

        readAndAppend(userNote, noteData);
    }
})

module.exports = router;