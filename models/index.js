var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");
var Worship = require("./worship");  // need this !!
module.exports.Worship = Worship;   // need this !!  exports to other pages

// module.exports.Campsite = require("./campsite.js.example");
