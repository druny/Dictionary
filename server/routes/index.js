let 
  router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).send({ title: 'Express' });
});

router.all('/test', (req, res) => {
  res.send('Test case');
});

router.all('/!*', (req, res) => {
  res.send('All ');
});

module.exports = router;
