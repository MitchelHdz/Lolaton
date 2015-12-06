var express = require('express');
var router = express.Router();
var Twitter = require('twitter');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var client = new Twitter({
  consumer_key: 'gWtJmQMgye24s9nWtHpLBfumg',
  consumer_secret: 'xdza276yr3d52UPmlMo8q5FBV5hUFgIIKQXp6upZN0VaERzRaF',
  access_token_key: '101252908-JG00AMzAbAt8WiZ0Y3tDgo171k0djd73RMwsld15',
  access_token_secret: '13vPG9nyepu9QwnOW7aosmK2sTGi8OkLBvvnf89jITNWv'
});
function test (argument) {
	
}
module.exports = router;
