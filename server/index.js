var express = require('express')
var session = require('express-session')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var passport = require('passport')
var kalanto = require('../server/kalanto.js')
////////////////
///End Points///
////////////////
var scoring = require('../server/endpoints/scoreEP.js')
var player = require('../server/endpoints/playerEP.js')
var course = require('../server/endpoints/courseEP.js')
var team = require('../server/endpoints/teamEP.js')

var app = express()

app.use(express.static(__dirname + './../public'))
app.use(session({secret: kalanto.keys}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())

mongoose.set('debug',true)
mongoose.connect('mongodb://localhost/database')
//////////////////////////
///endpoints for scoring///
//////////////////////////
app.post('/score/create', scoring.scoreCreate)
app.get('/score/all', scoring.score)
app.get('/score/:ID', scoring.scoreID)
app.put('/score/update/:ID', scoring.scoreUpdate)
app.delete('/score/delete/:ID',scoring.scoreDelete)
/////////////////////////
///endpoints for players//
/////////////////////////
app.post('/player/create', player.playerCreate)
app.post('/player/scoresubmit/:ID', player.playerScoreSubmit)
app.get('/player/all', player.players)
app.get('/player/:ID',player.playerID)
app.put('/player/update/:ID', player.playerUpdate)
app.delete('/player/delete/:ID',player.playerDelete)
///////////////////////////
///endpoints for courses///
///////////////////////////
app.post('/course/create',course.courseCreate)
app.get('/course/all',course.course)
app.get('/course/:ID',course.courseID)
app.put('/course/update/:ID',course.courseUpdate)
app.delete('/course/delete/:ID',course.courseDelete)
/////////////////////////
///endpoints for teams///
/////////////////////////
app.post('/team/create',team.teamCreate)
app.get('/team/all',team.team)
app.get('/team/:ID',team.teamID)
app.put('/team/update/:ID',team.teamUpdate)
app.put('/team/addplayer/:ID', team.addTeamPlayer)
app.delete('/team/delete/:ID',team.teamDelete)
/////////////////
///funny stuff///
/////////////////
app.listen('3000', function(){
   console.log('SHHH the GOVERNMENT is listening on the twerking port 3000')
})
