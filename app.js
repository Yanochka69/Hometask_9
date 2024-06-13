const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const UserService = require('./services/userService')
const UserController = require('./controllers/usersController')

const userModel = require('./reposio/inMemoryUserModel')
const userService = new UserService(userModel)
const userController = new UserController(userService)

const app = express()

app.use(bodyParser.json())
app.use('/api', userRoutes(userController))

const PORT = 3000
app.listen(PORT, () =>{
    console.log('Server is running!!!')
})

