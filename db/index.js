const mongoose = require('mongoose');
// run the code in config to set the environemnt variables
require('../config');

// ask mongoose to use the global Promise instead of any 3rd party Promise lib
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    // console.log('**ERROR in DB connection, exiting..');
    console.error(err);
    process.exit(-1);
  })


module.exports = mongoose;