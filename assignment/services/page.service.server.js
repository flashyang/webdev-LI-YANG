module.exports = function(app){

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  let PAGES = [
    { _id: '321', name: 'Post 1', websiteId: '456', title: 'Lorem' },
    { _id: '432', name: 'Post 2', websiteId: '456', title: 'Lorem' },
    { _id: '543', name: 'Post 3', websiteId: '456', title: 'Lorem' }
  ];

  function createPage(req, res) {
    let page = req.body;
    PAGES.push(page);
    res.json(page);
  }

  function findAllPages(websiteId) {
    const resultSet = [];
    for ( const i in PAGES) {
      if (PAGES[i].websiteId === websiteId) {
        resultSet.push(PAGES[i]);
      }
    }
    return resultSet;
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var pages= findAllPages(websiteId);
    res.json(pages);
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    var page= getPageById(pageId);
    res.json(page);
  }

  function getPageById(pageId) {
    return PAGES.find(function (page) {
      return page._id === pageId;
    });
  }

  function updatePage(req, res) {
    let pageId = req.params['pageId'];
    let page = req.body;
    for (const i in PAGES) {
      if (PAGES[i]._id === pageId) {
        PAGES[i].name = page.name;
        PAGES[i].title = page.title;
        console.log('update page');
        return res.json(page);
      }
    }
  }

  function deletePage(req, res) {
    let pageId = req.params['pageId'];
    for (const i in PAGES) {
      if (PAGES[i]._id === pageId) {
        const j = +i;
        PAGES.splice(j, 1);
        return res.json(pageId);
      }
    }
  }
}

