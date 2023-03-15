const {Unauthorized} = require('../errors/index')
const jwt = require('jsonwebtoken')

const authtorizationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Unauthorized("No token provided");
  }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const { id, username } = decoded
        
        req.user = { id, username }
        
        next()
    }
    catch (err) {
        throw new Unauthorized('Not allowed to access this route')
    }
}

module.exports = authtorizationMiddleware