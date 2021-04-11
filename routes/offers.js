var express = require('express');
var router = express.Router();
const Mongolib = require('../db/Mongolib');

/* GET home page. */
router.get('/', function (req, res, next) {
  Mongolib.getDatabase((db) => {
    Mongolib.findDocuments(db, (docs) => {
      res.send(docs);
    });
  });
});

/* POST offer */
router.post('/', (req, res, next) => {
  console.log('body', req.body);
  Mongolib.getDatabase((db) => {
    db.collection('offers')
      .insertOne(req.body)
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(400);
      });
  });
});

module.exports = router;
