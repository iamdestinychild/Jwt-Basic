const { CostumError, createCustomError} = require('../errors/errors')

const login = async (req, res) => {
    // checking unfilled area

    const { username, password } = req.body
    
    if (!username || !password) {
        throw new CostumError('please provide username and password', 400)
    }
    res.send('Fake Login/Register Route')
}

const dashboard =  (req, res) => {
    const luckyNumber = Math.floor((Math.random() * 100) + 1)
    res.status(200).json({msg:'Hello john Doe', secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {login, dashboard}