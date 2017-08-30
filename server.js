const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser')
const data = require('./dal.js')
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  const notCompleted = data.filterNotCompleted();
  const completed = data.filterCompleted();
  res.render("choreList", {notCompleted: notCompleted, completed: completed})
})
app.post('/', function(req, res){
  data.addTask(req.body.newtask)
  console.log(req.body.newtask)
  res.redirect('/')
})
app.post('/:id', function (req, res){
  console.log(req.params.id);
  data.itemCompleted(+req.params.id);
  res.redirect('/');
})
//app.get('/:id', function(res, req))
app.set('port', 3000);
app.listen(3000, function(){
  console.log('application is running');
})
