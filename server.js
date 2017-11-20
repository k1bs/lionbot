const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')

const app = express()

require('dotenv').config()

app.use(logger('dev'))
