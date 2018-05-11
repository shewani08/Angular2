// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
loginSchema = new Schema({
    _id : String,
    password : String
	
});

  User = mongoose.model('User', loginSchema);
  module.exports = User;