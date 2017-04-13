var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: String,
  city: String,
  likes: String
});

var Profile = mongoose.model('Worship', ProfileSchema);

module.exports = Profile;