
module.exports = function (app) {


  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUserById);
  app.delete("/api/user/:userId", deleteUser);
  app.get("/api/user", findUserByCredentials);
  //app.get("/api/user?username=username", findUserByUsername);

  const users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  function createUser(req, res) {
    const new_user = req.body;
    users.push(new_user);
    res.json(new_user);
  }

  function findUserById(req, res){
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    console.log("find user");
    res.json(user);
  }

  function updateUserById(req, res){
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;

        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteUser(req, res) {
    const userId = req.params['userId'];
    for (const i in users) {
      if (users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
    res.status(200).send("delete user");
  }

  function findUserByUsername(req, res) {
    const username = req.query["username"];
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  function findUserByCredentials(req, res){
    var username = req.query["username"];
    var password = req.query["password"];

    var user = null;

    if (username && password){
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
    }
    console.log("log in");
    res.json(user);
  }
};
