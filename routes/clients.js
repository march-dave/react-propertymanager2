var express = require('express');
var router = express.Router();

var Client = require('../models/client');
var Propertymgr = require('../models/propertymgr.js')

router.route('/')
.get((req, res) => {
  Client.find({})
    .populate('propertyref')
    .exec( (err, clients) => {
      res.status(err ? 400 : 200).send(err || clients);
    });
})
.post((req, res) => {
  var client = new Client(req.body);
  client.save((err, savedClient) => {
    res.status(err ? 400 : 200).send(err || savedClient);
  });
})

router.route('/:id')
.get((req, res) => {
  Client.findById({ _id: req.params.id })
        .populate('propertyref')
        .exec( (err, client) => {
          console.log('client: ', client);
          res.status(err ? 400 : 200).send(err || client);
        });

})
.delete((req, res) => {
  Client.findByIdAndRemove(req.params.id, (err, client) => {
    res.status(err ? 400 : 200).send(err);
  });
})
.put((req, res) => {
  Client.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, client) => {
    res.status(err ? 400 : 200).send(err || client);
  });
})

router.put('/:clientId/removeProperty/:propertyId', (req, res) => {
  Client.findById(req.params.clientId, (err, client) => {

    if (err) return res.status(400).send(err);
    //  filter removeProperty from Client

    var propertyId = req.params.propertyId;
    Propertymgr.findById(propertyId, function(err, property) {

      client.propertyref = client.propertyref.filter( function (c) {
        return c.toString() !== propertyId;
      });
      client.save();
    });
  });
});

router.put('/:clientId/addProperty/:propertyId', (req, res) => {
  Client.findById(req.params.clientId, (err, client) => {

    if (err) return res.status(400).send(err);

    Propertymgr.findById(req.params.propertyId, function(err) {
      client.propertyref.push(req.params.propertyId);
      client.save((err, savedClient) => {
        res.status(err ? 400 : 200).send(err || savedClient);
      });
      }
    )
  });
});

module.exports = router;
