window.Application = {};

Application.TvFormView = Backbone.View.extend({
  template: Handlebars.templates['TvFormView'],
  render: function() {
    var context = this.collection ? this.collection : {},
        output = this.template(context);
    this.$el.html(output);

  },
  initialize: function(){
    //render so that dom elements exist
    this.render();

    this.minSize = parseInt(this.collection.min(function(m){return parseInt(m.get("size"))}).get("size"));
    this.maxSize = parseInt(this.collection.max(function(m){return parseInt(m.get("size"))}).get("size"));;
    this.$brand = this.$('select[name="brand"]');
    this.$screenType = this.$('select[name="screenType"]');
    this.$sortDirection = this.$('select[name="sortDirection"]');
    this.$("#nummatches").html(this.collection.length);
    this.$slider = this.$(".noUiSlider").noUiSlider({
      range: [this.minSize, this.maxSize],
      start: [this.minSize, this.maxSize],
      step: 1,
      connect: true,
      slide: function(){
        $(this).children("a").first().attr("data-size",$(this).val()[0]);
        $(this).children("a").last().attr("data-size",$(this).val()[1]);         
      }
    });  
    //initialize slider toggle data-size for pseudo elements
    this.$slider.children("a").first().attr("data-size",this.minSize);
    this.$slider.children("a").last().attr("data-size",this.maxSize);  

    //get all unique values for type and brand and populate selects
    this.brands = _.union(this.collection.pluck("brand"));
    this.types = _.union(this.collection.pluck("type"));

    _.each(this.brands, function(b) {
      var optionElement = '<option value = "'+ b + '">' + b + '</option>';
      this.$brand.append(optionElement);
    }, this)

    _.each(this.types, function(t) {
      var optionElement = '<option value = "'+ t + '">' + t + '</option>';
      this.$screenType.append(optionElement);
    }, this)



    this.updateTvs = _.bind(this.updateTvs, this);
    this.sort = _.bind(this.sort, this);
    this.clearFilters = _.bind(this.clearFilters, this);
  },
  events: {
    'change select[name!="sortDirection"]': "updateTvs",
    'change select[name="sortDirection"]': "sort",
    'click #clearfilters': "clearFilters",
    'change .noUiSlider': "updateTvs",
  },
  updateTvs: function(event){    
    //filter the collection based on form data
    //check if selects say any
    var brand = this.$brand.val();
    var screenType = this.$screenType.val();
    var sliderVals = this.$slider.val();
    Application.filteredTelevisions.set(this.collection.filter(function(m){
      if(brand.toLowerCase() !== "any" && brand.toLowerCase() !== m.get("brand").toLowerCase()) return false;
      if(screenType.toLowerCase() !== "any" && screenType.toLowerCase() !== m.get("type").toLowerCase()) return false;
      if(sliderVals[0] > parseInt(m.get("size")) || sliderVals[1] < parseInt(m.get("size"))) return false;
      return true;
    }));
    this.$("#nummatches").html(Application.filteredTelevisions.length);
    Application.filteredTelevisions.trigger('change');
  },
  sort: function(event){
    var sortDirection = this.$sortDirection.val();
    if(sortDirection === "pricelowtohigh"){
      Application.filteredTelevisions.comparator = function(m){return parseInt(m.get("price"))}
      Application.filteredTelevisions.sort();
      Application.filteredTelevisions.trigger('change');
    } else {
      Application.filteredTelevisions.comparator = function(m){return -parseInt(m.get("price"))}
      Application.filteredTelevisions.sort();
      Application.filteredTelevisions.trigger('change');
    }
  },
  clearFilters: function(event){
    //reset the collection and inputs
    this.$slider.val([19, 100]);
    this.$brand.val("any");
    this.$screenType.val("any");
    Application.filteredTelevisions.set(this.collection.models);
    Application.filteredTelevisions.trigger('change');
    this.$("#nummatches").html(Application.filteredTelevisions.length);
  }
});

Application.TvListView = Backbone.View.extend({
  template: Handlebars.templates['TvListView'],
  render: function() {
    var context = this.collection,
        output = this.template(context);
    this.$el.html(output);
    this.$(".rateit").rateit();
  },
  initialize: function(){
    this.collection.on('change', this.render, this);
  }
});

$(function() {
  
  var Television = Backbone.Model.extend({
    defaults: {
      name: "",
      description: "", 
      price: "",
      image: "",
      size: "", 
      type: "",
      brand: ""
      //add flag for rendered?
    }
  });

  var Televisions = Backbone.Collection.extend({
    model: Television,
    url: "/televisions",
    comparator: function(m){return parseInt(m.get("price"))}  
  });

  var FilteredTelevisions = Backbone.Collection.extend({
    model: Television,
    comparator: function(m){return parseInt(m.get("price"))}    
  });

  Application.televisions = new Televisions;
  Application.filteredTelevisions = new FilteredTelevisions;



  Application.televisions.fetch({success: function(){
    var tvFormView = new Application.TvFormView({
      collection: Application.televisions,
      el: $('#TvFormViewTemplate')
    });
    //set filtered list to entire list at first
    Application.filteredTelevisions.set(Application.televisions.sort().toArray());
    //create a TvListView and set the filtered list to the tvListView collection
    var tvListView = new Application.TvListView({
      el: $('#TvListViewTemplate'),
      collection: Application.filteredTelevisions
    });
    
    tvListView.render();
  }});
    

  
  
});
