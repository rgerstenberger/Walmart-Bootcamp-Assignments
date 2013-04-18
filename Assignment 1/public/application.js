window.Application = {};

Application.IndexView = Backbone.View.extend({
  render: function(collection) {
    this.$el.empty();
    var context = this.collection ? collection : {},
        output = this.options.template(context);
    this.$el.html(output);
  }  
});

$(function() {
  
  //Backbone pieces  
  var Television = Backbone.Model.extend({
    defaults: {
      name: "",
      description: "", //the example JSON only had name but the page requires title and description
      price: "",
      image: "",//is there a placeholder image appropriate for this?
      size: "", //should proper defaults for numbers be 0?
      type: "",
      brand: ""
    }
  });

  // var TelevisionView = Backbone.View.extend({

  // });

  var Televisions = Backbone.Collection.extend({
    model: Television,
    url: "/televisions"    
  });


  Application.televisions = new Televisions;
  Application.televisions.fetch({success: function(){
      indexView.render(indexView.collection);
      //Dom pieces, need to relocate after splitting out template section from static html
      var slider = $(".noUiSlider").noUiSlider({
        range: [19, 62],
        start: [30, 55],
        step: 1,
        slide: function(){
          var values = $(this).val();
          $(".sizes").text(
             values[0] +
             " - " +
             values[1]
          );
        }
      });
  }});

  var indexView = new Application.IndexView({
    template: Handlebars.templates['index'],
    collection: Application.televisions,
    el: $('#indexViewTemplate'),
    events: {
      //all filter events should trigger the same refresh/filter data function?      
    }
  });


    

  
  
});
