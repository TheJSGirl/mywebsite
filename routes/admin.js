const express = require('express');
const admin = express.Router();
const Message = require('../models/Message');
// console.log(Message);

admin.route('/messages')
    .get(async (req, res) => {
        try{
            
            // const messages =  await Message.find();
            // console.log(messages);

            console.log(Message.find({}).then(data => res.send(data)).catch(err => res.send(err)));
        }

        catch(err){
            console.log(err);
        }
      
    })

module.exports = admin;