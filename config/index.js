'use strict';
let env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  process.env.PORT = 5000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/Priyanka'; 
}
console.log('**Working environment is',env);

