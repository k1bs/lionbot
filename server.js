const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')

const app = express()

require('dotenv').config()

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use(
  session({
    key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('public'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🤖 Listening on port ${PORT}`)
})
