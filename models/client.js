'use strict';

var mongoose = require('mongoose');
// var propertymgrDB = require('./propertymgr');

var clientSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  phonenum: {type: String},
  otherinfo: {type: String},
  propertyref: [{type: mongoose.Schema.Types.ObjectId, ref: 'Propertymgr'}]
});

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;
