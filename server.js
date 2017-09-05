require('./config');
const express = require('express');
const db      = require('./db');
const path = require('path');

const port    = process.env.PORT;


const app = express();

// serving all the satic files 
const staticFilesPath = path.join(__dirname, 'client');
app.use(express.static(staticFilesPath));

// making the root route 
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'client', 'index.html'));
});


// handle 404 
app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, '404.html'));
})

app.listen(port, ()=> {
  console.log('listing at:', port);
});
