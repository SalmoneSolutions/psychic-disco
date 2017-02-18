express = require('express')
var exphbs = require('express-handlebars');
var app = express()



var gatRoutes = require('./projects/GetMeThere/app.js')
app.use('/projects/gatjie', gatRoutes);
gatRoutes._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    r.route.path = '/projects/gatjie'+r.route.path;
  }
})
var devProfile = require('./developers/ayabonga/app.js')
app.use('/developers/ayabonga', devProfile);
devProfile._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    r.route.path = '/developers/ayabonga'+r.route.path;
  }
})


app.use(express.static( __dirname+'/public'))
app.engine('handlebars', exphbs({defaultLayout: 'main',layoutsDir:__dirname+'/views/layouts'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

app.get('/',function(req,res){
    res.render('index')
})
app.get('/pricing',function(req,res){
    res.render('pricing')
})
app.get('/developers',function(req,res){
    res.render('developers')
})
app.get('/projects',function(req,res){
    res.render('index')
})
app.listen(5000)
