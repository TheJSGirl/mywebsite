const messages = require('express').Router();
const Message = require('../models/Message');


messages.route('/')
  .post(async (req, res) => {
    try {
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
            
          const savedMessage =  await myMessage.save();
    }
    
    catch(err){
        return res.status(500).json({

        })
    }
  });

    module.exports = messages;