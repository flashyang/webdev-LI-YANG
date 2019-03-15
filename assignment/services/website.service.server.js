module.exports = function(app){

  let WEBSITES = [
    { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
    { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
    { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem' },
    { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },
    { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
    { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
    { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
  ];

  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsiteById);

  function updateWebsiteById(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES[i] = newWebSite;
        console.log('update website');
        return res.json(newWebSite);
      }
    }

    // res.json(getWebsitesForUserI(userId));
  }

  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    res.json(getWebsiteById(websiteId));
  }

  function deleteWebsite(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES.splice(i, 1);
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }

  }

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    website._id = (new Date()).getTime() + "";
    website.developerId = userId;
    WEBSITES.push(website);
    var websites = getWebsitesForUserId(userId);
    res.json(websites);
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    var websites= getWebsitesForUserId(userId);
    res.json(websites);
  }

  function  getWebsitesForUserId(userId) {
    var websites=[];

    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function getWebsiteById(websiteId){
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }
}
