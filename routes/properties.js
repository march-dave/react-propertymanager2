var express = require('express');
var router = express.Router();
var Property = require('../models/propertymgr');

/* GET users listing. */
router.get('/', (req, res) => {
  Property.find({}, (err, properties) => {
    res.status(err ? 400 : 200).send(err || properties);
  });
});

/* GET /api/trees/:id */
router.get('/:id', (req, res) => {
  Property.findById(req.params.id, (err, properties) => {
    res.status(err ? 400 : 200).send(err || properties);
  });
});

router.delete('/:id', (req, res) => {
  Property.findByIdAndRemove(req.params.id, (err, properties) => {
    res.status(err ? 400 : 200).send(err || properties);
  });
});

router.put('/:id', (req, res) => {
  Property.findByIdAndUpdate(req.params.id,  {$set: req.body},  {new: true}, (err, property) => {
    res.status(err ? 400 : 200).send(err || property);
  });
});

router.post('/', (req, res) => {
  var property = new Property(req.body);
  property.save((err, saveProperty) => {
    res.status(err ? 400 : 200).send(err || saveProperty);
  });
});

module.exports = router;
