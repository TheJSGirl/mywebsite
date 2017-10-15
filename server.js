require('./config');
const express = require('express');
const db      = require('./db');
const Message = require('./models/Message');
const User = require('./models/Admin');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const expressValidator = require('express-validator');

const port    = process.env.PORT;


const app = express();

//middleware
app.use(expressValidator());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', routes);



// serving all the satic files 
const staticFilesPath = path.join(__dirname, 'client', 'public');
app.use(express.static(staticFilesPath));


// app.get('/api/contact')


// serving the files in client/public
app.get('*', (req, res) => {
  // console.log(staticFilesPath);
  res.sendFile(staticFilesPath + '/index.html');
});



app.listen(port, ()=> {
  console.log('listen at port:', port);
});
