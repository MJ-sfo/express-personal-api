var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var WorshipSchema = new Schema({
  title: String,
  tempo: String
});

var Worship = mongoose.model('Worship', WorshipSchema);

module.exports = Worship;