const jwt =require("jsonwebtoken");
const usermodel =require("./database");

// const auth =async(req,res,next)=>{
//     try {
//         const token = req.header('Authorization');
//         const verify =jwt.verify(token,process.env.KEY);
//         console.log(verify);
//         const user = await usermodel.findOne({_id:verify._id})
//         console.log(user);
//         req.token =token;
//         req.user=user;
//         next();
//     } catch (error) {
//         res.status(400).send(error);
//     }
// }

// const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
      const token = req.header('Authorization');
  
      if (!token) {
        return res.status(401).json({ message: 'Authorization header missing' });
      }
  
      try {
        const decoded = jwt.verify(token, process.env.KEY);
        const user = await usermodel.findOne({ _id: decoded._id });
  
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        req.token = token;
        req.user = user;
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };

module.exports = auth;
