const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
 
  res.send('api workshhh');
});
/**
 * Create HTTP server.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myappdatabase');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("DB connection alive");
 
})

 // Get Todos
/*router.post('/api/createUsers', (req, res, next)=>{
  
  console.log("helldfjlkdjflk");
    // create mongose method to create a new record into collection
    db.login.insert({req
    }, function(err, employee) {
      if (err)
        res.send(err);
  
      // get and return all the employees after newly created employe record
      dblogin.find(function(err, req) {
        if (err)
          res.send(err)
        res.json(req);
      });
    
  
  });
  console.log("kjfkdjfkld");
});
router.post('/createUsers', function(req, res){
  console.log('test');
  res.end(); // end the response
});
// Bear models lives here
/*var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myappdatabase');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("DB connection alive");
 var Employee = require('D:/GIt/FirstAngularApp/src/app/models/data');
 router.post("/new",function(req,res){
    console.log("testing");
 new Employee({_id:req.body.email,
                  password:req.body.password}).save(function(err,doc){
                    if(err) res.json(err);
                    else res.send("succesfully inserted");
                  })

  })
 


});
*/


//code related to mongo ends


module.exports = router;

