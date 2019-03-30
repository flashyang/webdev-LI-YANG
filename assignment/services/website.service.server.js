module.exports = function(app){

  var websiteModel = require("../model/website/website.model.server");

  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsiteById);

  function updateWebsiteById(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    websiteModel.updateWebsite(websiteId, newWebSite)
      .then(function(status) {
        res.send(newWebSite);
      }, function(err) {
        res.status(500).json(err);
      });

  }

  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    websiteModel.findWebsiteById(websiteId).then(function(website) {
      if (website) {
        res.json(website);
      } else {
        res.status(404);
        res.json(website);
      }
    }, function(err) {
      res.status(500).json(err);
    });
  }

  function deleteWebsite(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function(status) {
        res.json(status);
      }, function(err) {
        res.status(500).json(err);
      });

  }

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    websiteModel.createWebsiteForUser(userId, website)
      .then(function (website){
        res.json(website);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function(websites) {
        res.json(websites);
      }, function(err) {
        res.status(500).json(err);
      });
  }

}
