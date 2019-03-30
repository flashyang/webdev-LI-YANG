module.exports = function(app){

  var pageModel = require("../model/page/page.model.server");

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function createPage(req, res) {
    let page = req.body;
    var websiteId = req.params["websiteId"];
    pageModel.createPage(websiteId, page)
      .then(function (page){
        res.json(page);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    pageModel.findAllPagesForWebsite(websiteId)
      .then(function(pages) {
        res.json(pages);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    pageModel.findPageById(pageId).then(function(page) {
      if (page) {
        res.json(page);
      } else {
        res.status(404);
        res.json(page);
      }
    }, function(err) {
      res.status(500).json(err);
    });
  }

  function updatePage(req, res) {
    let pageId = req.params['pageId'];
    let page = req.body;
    pageModel.updatePage(pageId, page)
      .then(function(status) {
        res.send(status);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function deletePage(req, res) {
    let pageId = req.params['pageId'];
    pageModel.deletePage(pageId)
      .then(function(status) {
        res.json(status);
      }, function(err) {
        res.status(500).json(err);
      });
  }
}

