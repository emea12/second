const {verifyJWT }= require("./verifyJWT")
exports.authoticateUser = (req,res,next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
   return  res.status(403);
  }
  const token =  authHeader.split(" ")[1]
  req.token = token

  
  next() 
};
