// const { request } = require('express'); 
var express = require('express');
var router = express.Router();
// router.set("view engine", "ejs");

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/use', function(req, res, next) {
   res.send("hello nature i am using java");
 });
 router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/close', function(req, res, next) {
  res.render('close');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
// router.get('/about/:username', function(req, res, next) {
//   res.send(req.params.username);
// });
router.get('/zero', function(req, res, next) {
  res.render('index');
});
module.exports = router;
 