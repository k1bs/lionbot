/////////////////////////////////////////////////////////
//                <--Server.js-->                     //
//     This file is where our server is created.      //
//          The LionBot app starts here,              //
// importing all necessary pkgs./files to run the app //
//                                                    //
////////////////////////////////////////////////////////

// express package: will initialize the usage of express, our back-end framework
const express = require('express')

// morgan package: middleware used to log a console message everytime a request is made
const logger = require('morgan')

// body-parser: allows us to parse data the way we want (JSON, plain text) before using it
// neccessary to use req.body
const bodyParser = require('body-parser')

// packages needed to establish user authentication for app
// cookie-parser will allow us access to user cookies during sessions
// session will allow us to store data during each user session
// passport is the main package handling auth
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

// creating a new instance of express
const app = express()

// .env file will store our SECRET_KEY and keep it hidden
require('dotenv').config()

// allwoing morgn to log data from every request
app.use(logger('dev'))

// parses data into json for every request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// allow us to use cookie-parser on every request
app.use(cookieParser())

// basic configuration settings for sessions
app.use(
  session({
    key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
  })
)

// initializes passport(auth) checks on user sessions
app.use(passport.initialize())
app.use(passport.session())

// allows us acess to static files in our public folder
app.use(express.static('public'))

// port number this server will be accessible from
const PORT = process.env.PORT || 3001

// logs a messsage every time the server is started
app.listen(PORT, () => {
  console.log(`🤖 Listening on port ${PORT}`)
})

// sends this message when rooth path is accessed
app.get('/', (req, res) => {
  res.send('🤖 LionBot is alive !')
})

// imports auth-routes file to use for '/api/auth' path requests
const authRoutes = require('./routes/auth-routes')
app.use('/api/auth', authRoutes)

// imports command routes file to use for '/api/commands' path requests
const commandRoutes = require('./routes/command-routes')
app.use('/api/commands', commandRoutes)

// handles error messages to paths that are not detailed here, request errors
app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not Found!'
  })
})

// handles error messages that deal with server calls not being recogzied
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    error: err,
    message: err.message
  })
})
