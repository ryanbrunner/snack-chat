var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  body: String,
  user: String
});

module.exports = mongoose.model('Post', PostSchema);