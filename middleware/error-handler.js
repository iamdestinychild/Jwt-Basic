const { CostumError } = require('../errors/errors')

const errorHandler = (err, req, res, next) => {
    if (err instanceof CostumError) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:"somthing went wrong pls try again later"})
}

module.exports = errorHandler