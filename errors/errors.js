class CostumError extends Error{
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, stats) => {
    return new CostumError(msg, stats)
}

module.exports = {CostumError, createCustomError}