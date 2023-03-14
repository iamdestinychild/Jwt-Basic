const express = require('express')
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/404notfound')
require('dotenv').config()
require('express-async-errors')


const mainRouter = require('./route/auth')

const app = express()

app.use(express.json())

// routes

app.use('/api/v1', mainRouter)


// error middleware
app.use(errorHandler)
app.use(notFound)



const port = process.env.PORT || 4444

const start = async () => {
    try {
        app.listen(port, console.log(`server is listeaning on port ${port} ....`))
    }
    catch (err){
        return err
    }
}

start()