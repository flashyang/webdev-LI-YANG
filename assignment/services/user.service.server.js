
module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUserById);
  app.delete("/api/user/:userId", deleteUser);

  // const users = [
  //   {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
  //   {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
  //   {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
  //   {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  // ];

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
      console.log(status);
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
