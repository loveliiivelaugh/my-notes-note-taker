const express = require('express');
const path = require('path');
const router  = require('./routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(router); 

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));