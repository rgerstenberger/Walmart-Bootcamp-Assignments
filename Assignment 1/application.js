window.Application = {};

Application.View = Backbone.View.extend({
  render: function() {
    var context = this.collection ? this.collection : {},
        output = this.options.template(context);
    this.$el.html(output);
  }
});

$(function() {
  var Television = Backbone.Model.extend({
    defaults: {
      title: "",
      description: "", //the example JSON only had name but the page requires title and description
      price: "",
      listPrice: "",
      image: "",//is there a placeholder image appropriate for this?
      size: "", //should proper defaults for numbers be 0?
      type: ""
    }
  });

  // var TelevisionView = Backbone.View.extend({

  // });

  var Televisions = Backbone.Collection.extend({
    model: Television
  });


  var televisions = new Televisions([{
    "title": "Samsung 32-inch LCD HTDTV",
      "description": "Samsung 32C120U 32-Inch 720p 60Hz LCD HDTV (Black)", //the example JSON only had name but the page requires title and description
      "price": 390.99,      
      "image": "images/tv1.png",//is there a placeholder image appropriate for this?
      "size": 32, //should proper defaults for numbers be 0?
      "type": "LCD"
    },
    {
    "title": "Samsung 32-inch LCD HTDTV",
      "description": "Samsung 32C120U 32-Inch 720p 60Hz LCD HDTV (Black)", //the example JSON only had name but the page requires title and description
      "price": 390.99,      
      "image": "images/tv1.png",//is there a placeholder image appropriate for this?
      "size": 32, //should proper defaults for numbers be 0?
      "type": "LCD"
    },
    {
    "title": "Samsung 32-inch LCD HTDTV",
      "description": "Samsung 32C120U 32-Inch 720p 60Hz LCD HDTV (Black)", //the example JSON only had name but the page requires title and description
      "price": 390.99,      
      "image": "images/tv1.png",//is there a placeholder image appropriate for this?
      "size": 32, //should proper defaults for numbers be 0?
      "type": "LCD"
    },
    {
    "title": "Samsung 32-inch LCD HTDTV",
      "description": "Samsung 32C120U 32-Inch 720p 60Hz LCD HDTV (Black)", //the example JSON only had name but the page requires title and description
      "price": 390.99,      
      "image": "images/tv1.png",//is there a placeholder image appropriate for this?
      "size": 32, //should proper defaults for numbers be 0?
      "type": "LCD"
    },
    {
    "title": "Samsung 32-inch LCD HTDTV",
      "description": "Samsung 32C120U 32-Inch 720p 60Hz LCD HDTV (Black)", //the example JSON only had name but the page requires title and description
      "price": 390.99,      
      "image": "images/tv1.png",//is there a placeholder image appropriate for this?
      "size": 32, //should proper defaults for numbers be 0?
      "type": "LCD"
    },
    {
    "title": "Samsung 32-inch LCD HTDTV",
      "description": "Samsung 32C120U 32-Inch 720p 60Hz LCD HDTV (Black)", //the example JSON only had name but the page requires title and description
      "price": 390.99,      
      "image": "images/tv1.png",//is there a placeholder image appropriate for this?
      "size": 32, //should proper defaults for numbers be 0?
      "type": "LCD"
    },
    {
    "title": "Samsung 32-inch LCD HTDTV",
      "description": "Samsung 32C120U 32-Inch 720p 60Hz LCD HDTV (Black)", //the example JSON only had name but the page requires title and description
      "price": 390.99,      
      "image": "images/tv1.png",//is there a placeholder image appropriate for this?
      "size": 32, //should proper defaults for numbers be 0?
      "type": "LCD"
    }
]);

  //populate the collection from json file or televisions.fetch();?

  var indexView = new Application.View({
    template: Handlebars.templates['index'],
    collection: televisions,
    events: {
      //all filter events should trigger the same refresh/filter data function?
    }
  });
  indexView.render();
  $('body').append(indexView.el);
});
