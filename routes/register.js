const express = require('express');
const register = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const {check,   validationResult} = require('express-validator/check');

register.route('/')
    .post(async (req, res) => {
        try{

        check('name', 'name is required').exists().isLength({min:7});
        check('password', 'password is required').exists().isLength({min: 5});

        validationResult(req).throw();

        const {name, password} = req.body;
        console.log(req.body);
            const hashPassword = await bcrypt.hash(password, 10);
            console.log("hashedPassword => ", hashPassword);
            const adminData = {
                name,
                hashPassword
            }
            
        //make instance of model
        const admin = await new Admin(adminData);
        const savedData =  await admin.save();
        //    console.log('savedData',savedData);

            return res.status(200).json({
               data: savedData,
               status: 'ok',
               message: 'saved sucessfully'
           });
        }
        catch(err){
            console.log(err.mapped()); 
            console.error(err);
            return res.status(500).json({
                data: [],
                status: 'failed',
                message: 'failed'
            });
        }
    })


module.exports = register;