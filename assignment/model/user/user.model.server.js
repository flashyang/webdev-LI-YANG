var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var userModel = mongoose.model("userModel", userSchema);
userModel.findUserById = findUserById;
userModel.createUser = createUser;
userModel.deleteUser = deleteUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUserName = findUserByUserName;
userModel.updateUser = updateUser;
userModel.findUserByFacebookId = findUserByFacebookId;

var api = { findUserByFacebookId: findUserByFacebookId, };

module.exports = userModel;

function findUserByFacebookId(facebookId) {

  return userModel.findOne({'facebook.id': facebookId});
}

function createUser(user) {
  return userModel.create(user);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function findUserByUserName(username) {
  return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  return userModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return userModel.deleteOne({_id: userId});
}
