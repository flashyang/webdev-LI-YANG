const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var bcrypt = require("bcrypt-nodejs");
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function (app) {

  const facebookConfig = {
    clientID : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL : process.env.FACEBOOK_CALLBACK_URL
  };

  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUserName(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            console.log("local strategy verification success");
            return done(null, user);
          } else {
            console.log("local strategy verification failed");
            return done(null, false);
          }
        },
        function (err) {
          return done(err);
        });
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id).then(
      function(user) {
        if(user) {
          return done(null, user);
        } else {
          var names = profile.displayName.split(" ");
          var newFacebookUser = {
            lastName: names[1],
            firstName: names[0],
            email: profile.emails ? profile.emails[0].value:"",
            facebook: { id: profile.id, token: token}
          };
          return userModel.createUser(newFacebookUser);
        }
        }, function(err) {
        if (err) {
          return done(err);
        }
      }).then(
        function(user){
          return done(null, user);
          }, function(err){
          if (err) {
            return done(err);
          }
        });
  }

  var userModel = require("../model/user/user.model.server");

  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post ('/api/loggedIn', loggedIn);

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUserById);
  app.delete("/api/user/:userId", deleteUser);
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/login' }));

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.status(200);
    res.json("log out success");
  }

  function loggedIn(req, res) {
    res.json(req.isAuthenticated() ? req.user : 0);
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .findUserByUserName(user.username)
      .then(function (data) {
        if(data){
          res.status(400).send('Username is in use!');
        } else {
          userModel
            .createUser(user)
            .then(
              function(user){
                if(user){
                  req.login(user, function(err) {
                    if(err) {
                      res.status(400).send(err);
                    } else {
                      res.json(user);
                    }
                  });
                }
              }
            );
        }
      })

  }

  function createUser(req, res) {
    const new_user = req.body;
    userModel.createUser(new_user)
      .then(function(user){
        res.json(user);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findUserById(req, res){
    var userId = req.params["userId"];
    userModel.findUserById(userId).then(function (user){
      if (user) {
        res.json(user);
      } else {
        res.status(404);
        res.json(user);
      }
    }, function(err) {
      res.status(500).json(err);
    });
  }

  function updateUserById(req, res){
    var userId = req.params['userId'];
    var user = req.body;

    userModel.updateUser(userId, user)
      .then(function(status){
        res.json(user);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function deleteUser(req, res) {
    const userId = req.params['userId'];

    userModel.deleteUser(userId).then(function(status) {
      res.json(status);
    }, function(err) {
      res.status(500).json(err);
    });
  }


  function findUserByCredentials(req, res){
    var username = req.query["username"];
    var password = req.query["password"];

    if (username && password) {
      userModel.findUserByCredentials(username, password)
        .then(function(user) {
          if (!user) {
            res.status(401).json(user);
          } else {
            res.json(user);
          }
        }, function(err) {
          res.status(500).json(err);
        }).catch( err => {
          return res.json("no such user");
      });

    }
  }
};
