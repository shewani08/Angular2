var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
  createUsers: function (req, res) {
    var user = req.body;
    console.log("value"+user.email) ;
       mongoose.connect('mongodb://127.0.0.1:27017/myappdatabase');

    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;
    //Get the default connection
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', function() {
  console.log("DB connection alive");
  new User({ _id:user.email, password: user.password })
      .save(function (err) {
        if (err) {
          res.status(504);
          res.end(err);

        } else {
          console.log('user saved');
         
          User.find({}, function (err, docs) {
            if (err) {
              res.status(504);
             
              res.end(err);
            } else {
              for (var i = 0; i < docs.length; i++) {
               console.log('user:', docs[i]._id);
              }
              res.end(JSON.stringify(docs));
            }
          });
          res.end();
        }
      });
})
   
  }
  }
