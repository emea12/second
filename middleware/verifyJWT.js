const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

exports.verifyJWT = (req, res, next) => {
 jwt.verify(req.token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      return res.status(StatusCodes.FORBIDDEN);
    } else {
    
      req.user = decode
      next()
    }
  });
};
