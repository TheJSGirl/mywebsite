const messages = require('express').Router();
const Message = require('../models/Message');


messages.route('/')
  .get(async (req, res) => {
    try{
          const sentMessage = await Message.find();
          if(!sentMessage){
            return res.status(404).json({
              data: [],
              status: 'failed',
              message: 'not found'
            });
          }
          let data = [];

          sentMessage.forEach((element) => {
            const senderData = {
                senderName: element.senderName,
                senderEmail: element.senderEmail,
                sentMessage: element.senderMessage
              }
              data.push(senderData);
            });

            
            return res.status(200).json({
              data: data,
              status: 'ok',
              message: 'Successful'
            });
      } 
    catch(err){
      return res.status(500).json({
        data: [],
        status: 'failed',
        message: 'something went wrong'
      });
    }
  })
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
          data: [],
          status: 'failed',
          message: 'something went wrong'
        });
    }
  });



    module.exports = messages;