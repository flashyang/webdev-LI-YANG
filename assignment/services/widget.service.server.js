module.exports = function(app){

  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });
  var widgetModel = require("../model/widget/widget.model.server");


  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.put("/api/page/:pageId/widget",reorderWidgets);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  //
  // let WIDGETS = [
  //   { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
  //   { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
  //   { _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%', url: 'http://lorempixel.com/400/200/'},
  //   { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
  //   { _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%', url: 'https://www.youtube.com/embed/APexI9Zb6iE' }
  // ];

  function createWidget(req, res) {
    let widget = req.body;
    var pageId = req.params["pageId"];
    widgetModel.createWidget(pageId, widget)
      .then(function (widget){
        res.json(widget);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params["pageId"];
    widgetModel.findAllWidgetsForPage(pageId)
      .then(function(widgets) {
        res.json(widgets);
      }, function(err) {
        res.status(500).json(err);
      });
  }


  function findWidgetById(req, res) {
    var widgetId = req.params["widgetId"];
    widgetModel.findWidgetById(widgetId).then(function(widget) {
      if (widget) {
        res.json(widget);
      } else {
        res.status(404);
        res.json(widget);
      }
    }, function(err) {
      res.status(500).json(err);
    });
  }

  function updateWidget(req, res) {
    let widgetId = req.params['widgetId'];
    let widget = req.body;
    widgetModel.updateWidget(widgetId, widget)
      .then(function(status) {
        res.send(status);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function deleteWidget(req, res) {
    let widgetId = req.params['widgetId'];
    widgetModel.deleteWidget(widgetId)
      .then(function(status) {
        res.json(status);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function reorderWidgets(req,res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);
    widgetModel.reorderWidget(pageId, startIndex, endIndex)
      .then()
    // found the index in widgets array
    // var startIndexDb = 0;
    // var endIndexDb = 0;
    // var count = 0;
    // for (var i = 0; i < WIDGETS.length; i++) {
    //   if (WIDGETS[i].pageId === pageId) {
    //     if (startIndex === count) {
    //       startIndexDb = i;
    //     }
    //     if (endIndex === count) {
    //       endIndexDb = i;
    //     }
    //     count++;
    //   }
    // }
    //
    // var changedWidget = WIDGETS[startIndex];
    // WIDGETS.splice(startIndexDb, 1);
    // WIDGETS.splice(endIndexDb, 0, changedWidget);
    // res.json(WIDGETS);
  }

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    //let baseUrl = "http://localhost:3200/";
    let baseUrl = "https://webdev-yangli-cs5610.herokuapp.com/";
    let callbackUrl = baseUrl + "user/" + userId +"/website/"+ websiteId+ "/page/" + pageId + "/widget";

    if(myFile == null) {
      return res.redirect(callbackUrl);
    }

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;


    if (!widgetId) {
      var tobeCreated = {_id: undefined, widgetType: 'IMAGE', pageId: pageId, size: size, text: 'text', width:'100%',
        url:'/uploads/' + filename, formatted: false};
      widgetModel.createWidget(pageId, tobeCreated)
        .then(function (widget){
          //return res.json('create');
          return res.redirect(callbackUrl)
        }, function(err) {
        });
    } else {
      widgetModel.findWidgetById(widgetId)
        .then(function(foundWidget) {
          foundWidget.url = '/uploads/' + filename;
          widgetModel.updateWidget(foundWidget._id, foundWidget)
            .then(function(status) {
              //return res.json('upload');
              return res.redirect(callbackUrl)
            }, function(err) {
            });
        });
    }
  }
};

