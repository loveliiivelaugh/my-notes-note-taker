const express = require('express');
const path = require('path'); //gotta figure out what this does...
const uniqueId = require('uuid') //gotta look this up

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes 

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));

app.get('/api/notes', (req, res) => res.json('../db/db.json'));

app.post('/api/notes', (req, res) => {
  console.log(res.body);

  const note = res.body;

  notes.push(note);
  res.json(note);
})

app.delete('/api/notes/:id', (req, res) => {
  console.log(res.body)
  //put some code here to delete the note from the server
})


// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));