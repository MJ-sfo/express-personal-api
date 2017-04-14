// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

var worship = [
	{
	  title: "God of Wonders",
	  tempo: "moderate"
	},
	{
	  title: "Freedom Reigns",
	  tempo: "slow"
	},
	{
	  title: "Freedom Reigns",
	  tempo: "moderate"
	},	
	{
		title: "jesu, Joy of Man's Desiring",
		tempo: "moderate"
	},
	{
		title: "Rain Down",
		tempo: "fast"
	}	
];

db.Worship.create(worship, function(err, worship){
	if (err){
		return console.log("error: ", err);
	}
  console.log("Created worship page", worship)  // change to 'worship' as second word
  process.exit(); // we're all done! Exit the program.
})
