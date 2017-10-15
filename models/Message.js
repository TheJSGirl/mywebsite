const mongoose = require('../db');
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
  senderName:{
    type: String
  },

  senderEmail:{
    type:String
  },

  senderMessage:{
    type: String
  },
  timestamp: {
    type: String,
    default: new Date().toDateString()
  }
});


const Message = mongoose.model('Messages', messageSchema); // creating table with name Messages using messageSchema 

// Message.insertMany({
//   SenderName: 'priyanka',
//   SenderEmail: 'abc21@gmail.com',
//   SenderMessage: 'hello kritika i would like to talk to you'
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// });

module.exports = Message;