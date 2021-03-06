const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const data = fs.readFileSync('./db/db.json', 'utf8');
//parse JSON string to JSON object
const db = JSON.parse(data);

// Sets up the Express app to handle data parsing
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//Routes HTML
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

// router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

//Routes API
//GET
router.get('/api/notes', (req, res) => res.json(db));

//POST
router.post('/api/notes', (req, res) => {

  const note = req.body;

  db.push(note);

  res.json(db);
});

//DELETE
router.delete('/api/notes/:id', (req, res) => {
  for ( i = 0; i < db.length; i++ ) {
    if ( db[i].id == req.params.id ) {
      db.splice(db.indexOf(db[i]), 1);
    }
  }
  
  res.json(db);
});

module.exports = router;