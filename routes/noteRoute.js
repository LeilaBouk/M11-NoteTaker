const express = require('express');
const path = require('path');
const fs = require("fs");
const noteData = require("../db/db.json");
const router = express.Router();
const uuid = require('../helpers/uuid.js')

router.get('/notes', (req, res) => {
    res.json(noteData)
    console.log("Note data found 📝")
});

router.post('/notes', (req, res) => {
    console.log("note taken");
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        let myNote = JSON.parse(data);
        const { title, text, id } = req.body;
        if (title && text) {
            const userNote = {
                title,
                text,
                id: uuid(),
            };
            let parseNote = JSON.parse(data);
            parseNote.push(myNote)

            fs.writeFile('./db/db.json', JSON.stringify(parseNote), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(noteData);
                }
            })
        }
    })
})

module.exports = router;