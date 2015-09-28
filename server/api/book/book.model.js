'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: String,
  cover: String,
  active: Boolean,
  owner:{
    type: Schema.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Book', BookSchema);
