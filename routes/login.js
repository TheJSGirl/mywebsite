const express = require('express');
const login  = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const {check, validationResult} = require('express-validator/check');
const jwt = require('jsonwebtoken');

login.route('/')
.post(async (req, res) => {

  
    try{
        check('name', 'name is required').exists();
        check('password', 'password is required').exists().isLength({min: 5});

        validationResult(req).throw();

        const {name, password} = req.body;
        console.log('request data', req.body);

        // const hashedPassword = await bcrypt.hash(password, 10);

        // console.log('hashedPassword =>', hashedPassword);

        const adminDataFromDb = await Admin.find({"name": name, "password": password});

        // console.log("adminDataFromDb",adminDataFromDb);

        //validation
        if(!adminDataFromDb.length){
            return res.status(404).json({
                data: [],
                message: 'not found'
            })
        }

        if(!name || !password){
            return res.status(404).json({
                data: [],
                message: 'not found'
            });
        }

        if(adminDataFromDb.length === 0){
            return res.status(404).json({
                data: [],
                message: 'email is not registered'
            });
        }


        const passwordFromDB = adminDataFromDb[0].password;
        // console.log(passwordFromDB);
        const isValidpassword = await bcrypt.compare(password, passwordFromDB);

         if(!isValidpassword){
            return res.status(401).json({
                data: [],
                message: 'failed authentication'
            });
        }
        const adminDataFromDatabase = {
            name : adminDataFromDb[0].name,
            password: adminDataFromDb[0].password
        }

        console.log('admindatafrom db name', adminDataFromDb[0].name);
        //generate token
        const token = jwt.sign(adminDataFromDatabase, 'abcdefghijklmn', {expiresIn: 60 * 60});

          return res.header('x-auth', token).status(200).json({
            status: 'ok',
            message: 'welcome'
        });

        return res.status(200).json({
                status:'successful',
                message:'login successfully'
            });

    }
    catch(err){
        // console.log(err.mapped());
        console.error(err);
            return res.status(500).json({
                data: [],
                status: 'failed',
                message: 'something went wrong'
            }); 
    }
});

module.exports = login;