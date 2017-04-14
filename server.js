// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

app.get('/api/worship', function (req, res) {
  // app is the express server, setting up to read app/worship
  db.Worship.find({})
    // .populate('author')  - for later
    .exec(function(err, songs){  //  songs here must match songs in json
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(songs);  //  song data exported in json format
    });
});  //  app.get('/api/worship', function (req, res) 

app.get('/api/profile', function (req, res) {
  // app is the express server, setting up to read app/worship
  // db.Profile.find({})
  //   // .populate('author')  - for later
  //   .exec(function(err, myself){ 
  //     if (err) {
  //       res.status(500).send(err);
  //       return;
  //     }
  //     res.json(myself);  //   data exported in json format
  //   });
  res.json({
    name: "Michael Laird",
    githubUsername: "MJ-sfo",
    githubProfileImage: "https://avatars3.githubusercontent.com/u/22490639?v=3&amp;u=ff9c0242d41c02b1c5f9d88081286f33188ab82d&amp;s=400",
    githubLink: "https://github.com/settings/profile",
    city: "San Fran",
    pets: "Heck No !!"
  })
});  //  app.get('/api/worship', function (req, res) 

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "https://evening-cliffs-93739.herokuapp.com/", // CHANGE ME
    endpoints: [
      {
        method: "GET", 
        path: "/api", 
        description: "Describes all available endpoints"
      },
      {
      method: "GET", 
       path: "/api/profile", 
       description: "Who I am"
       },
     {
      method: "GET",
      path: "/api/worship",
      description: "Worship Songs"
     },
      {
      method: "POST", 
      path: "/api/worship", 
      description: "Add a Worship Song"
      },
      {
        method: "PUT",
        path: "/api/worship/:id",
        description: "Edit a Worship Song"
      },
      {
        method: "DELETE",
        path: "/api/worship/:id",
        description: "Remove a Worship Song"
      }
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
