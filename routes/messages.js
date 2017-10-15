const messages = require('express').Router();
const Message = require('../models/Message');
const {ObjectID} = require('mongodb');
const {check, validationResult} = require('express-validator/check');

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


messages.route('/:messageId')
  .get(async(req, res) => {

    try{

      check('messageId', 'invalid id').exists().isInt(); // check for messageId
      
      const error = req.validationErrors();

      if(error){
        res.status(400).json({
          status: 'failed',
          message: error[0].msg
        })
      }

      // if the ID is not valid, send a message
      if (!ObjectID.isValid(req.params.messageId)) {
        return res.status(400).json({
            message : 'invalid id'
        });
      }
      

      // convert the id recieved from the user into an object id
    
      const id = new ObjectID(req.params.messageId);

      const message = await Message.find({'_id': id});
      console.log(message);
      return res.status(200).json(message);
    }
    
    catch(err){
      console.log(err);
      return res.status(500).json(err);
      
    }
    

  })


    module.exports = messages;