'use strict';

var mongoose = require('mongoose');

var propertymgrSchema = new mongoose.Schema({
  address: String,
  occupationstatus: String,
  rentprice: String,
  utilitiescost: String,
  otherinfo: String
});

var Propertymgr = mongoose.model('Propertymgr', propertymgrSchema)
module.exports = Propertymgr;
