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
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(expressValidator());



// serving all the satic files 
const staticFilesPath = path.join(__dirname, 'client', 'public');
app.use(express.static(staticFilesPath));


console.log('*****db', Message);
console.log('******model users', User);
// serving the files in client/public
app.get('*', (req, res) => {
  // console.log(staticFilesPath);
  res.sendFile(staticFilesPath + '/index.html');
});

// app.get('/api/contact')

app.post('/api/messages', (req, res) => {
  console.log(req.body);
  const {senderName, senderEmail, senderMessage} = req.body;
  
  const message = {
    senderName,
    senderEmail,
    senderMessage
  }

  console.log(message);
   
  if(!senderName || !senderEmail){
    console.log('please enter your name and email');
    return res.status(422).json({
      data:[],
      status:'failed',
      message:'Invalid arguments'
    });
  }

  let myMessage = new Message(message);
  
  myMessage.save()
  .then((data) => {
    console.log('**Data', data);
    return res.status(200).json({
      data: data,
      status:'ok',
      message:'inserted sucessfully'
    });
  })
  .catch((err) => {
    return res.status(500).json({
      data: [],
      status:'failed',
      message:'something went wrong'
    });
  });
});

app.listen(port, ()=> {
  console.log('listen at port:', port);
});
