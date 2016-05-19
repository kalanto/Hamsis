var express = require('express')
var session = require('express-session')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
// var scoreSchema =



var app = express()

app.use(express.static(__dirname + './../public')
