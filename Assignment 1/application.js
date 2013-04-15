window.Application = {};

Application.View = Backbone.View.extend({
  render: function() {
    var context = this.model ? this.model.attributes : {},
        output = this.options.template(context);
    this.$el.html(output);
  }
});

$(function() {
  var TV = Backbone.Model.extend({
    defaults: {
      title: "",
      description: "", //the example JSON only had name but the page requires title and description
      price: "",
      listPrice: "",
      image: "",//is there a placeholder image appropriate for this?
      size: "" //should proper defaults for numbers be 0?
    }
  });
  var indexView = new Application.View({
    template: Handlebars.templates['index'],
    model: model
  });
  indexView.render();
  $('body').append(indexView.el);
});
