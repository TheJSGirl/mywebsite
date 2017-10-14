const mongoose = require('../db');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name :{
        type: String,
        default: "Priyanka"
    },

    password: {
     type: String,
     default: 'abc123'
    },

    isAdmin:{
        type: Number,
        default: 1
    }
});

const Admin = mongoose.model('users', userSchema);

// Admin.insertMany({

//     userName: "Priyanka",
//     password: "abc123"
// }).than((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });

module.exports = Admin;

