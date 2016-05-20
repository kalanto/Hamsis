var express = require('express')
var session = require('express-session')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var passport = require('passport')
var kalanto = require('../server/kalanto.js')
// var scoreSchema =
var playerScore = ('./../schema/scoreSchema')
var course = ('./../schema/courseSchema')
var player = ('./../schema/playerSchema')


var app = express()

app.use(express.static(__dirname + './../public'))
app.use(session({secret: kalanto.keys}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())

mongoose.set('debug',true)
mongoose.connect('mongodb://localhost/database')

//endpoints for scoring
app.get('/score', scoring.score)
app.get('/score/:ID', scoring.getScoreID)
app.post('/score/score', scoring.scorePost)
app.put('/score/update/:ID', scoring.scoreUpdate)
app.delete('/score/delete/:ID')



app.listen('3000', function(){
   console.log('SHHH the GOVERNMENT is listening on the twerking port 3000')
})
