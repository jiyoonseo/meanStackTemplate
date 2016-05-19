var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MEAN Stack Template' });
});

router.get('/:sub', function(req, res, next) {
    //var sub = req.params.sub;
    res.render('index', { title: '$:sub'} );
});

router.get('/partials/:sub', function(req, res, next){
    //console.log("SUB= " + (req.params.sub));
    var sub = req.params.sub;
    res.render('partials/' + sub , { title: "$partial/:sub" });
});

module.exports = router;
