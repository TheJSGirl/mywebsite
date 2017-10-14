const jwt = require('jsonwebtoken');


const checkAuth = async (req, res, next) => {

    const token = req.header('x-auth'); 

    if(!token || typeof token === 'undefined'){
        return res.status(401).json({
            status: 'failed',
            err: 'invalid token'
        });
    }

    try{
        //decode the token
        const decode = await json(token, 'abcdefghijklmn');
        req.user = decode;
        next();

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            status: 'failed',
            err: 'something went wrong'
        });

    }

}
module.exports = checkAuth;