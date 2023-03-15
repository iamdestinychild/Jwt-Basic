const { StatusCodes } = require('http-status-codes')
const CustomError = require('./errors')

class BadRequest extends CustomError{
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BadRequest
    }
}

module.exports = BadRequest