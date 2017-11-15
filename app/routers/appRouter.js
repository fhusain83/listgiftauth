var passport = require('passport'),
    signupController = require('../controllers/signupController.js'),
    groupController=require('../controllers/groupController.js');

module.exports = function(express) {
  var router = express.Router()

  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/')
  }
  
  router.get('/signup', signupController.show)
  router.post('/signup', signupController.signup)

  router.post('/login', passport.authenticate('local', {
      successRedirect: '/home',
      failureRedirect: '/',
      failureFlash: true 
  }));

  router.get('/', function(req, res) {
    res.render('login')
  });

router.get('/mygroups',groupController.getallmygroups);
// function(req,res){
   // db.lists.findAll({}).then(function(results){
   //   res.render('list-man', {list: results});
    //})
  //});

  router.get('/groups',groupController.getallgroups);
  // function(req,res){
    //db.events.findAll({}).then(function(results){
      //res.render("list-join", {groups: results});
    //});

  //}); 

  router.post('/mygroups', groupController.posttomygroups);
  /* function(req,res){
    db.events.create({event_name : req.body.groupList}).then(function(results){
      res.render('list-man', {list: results});
    })
  });
*/
  router.post('/groups', groupController.posttoallgroups);
    /*function(req,res){
    db.lists.create({item_name : req.body.item}).then(function(results){
      res.render('list-join', {groups: results});
    })
  });*/


  router.get('/home', isAuthenticated, function(req, res) {
    res.render('home')
  })

  router.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
  })

  return router
}