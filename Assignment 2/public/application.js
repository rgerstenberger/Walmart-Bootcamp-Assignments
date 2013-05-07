window.Application = {};

var AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "detail/:id": "productDetail",
    "home": "home"
  },
  home: function(){},
  index: function(){
      Application.Product = Backbone.Model.extend({
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

    Application.Products = Backbone.Collection.extend({
      model: Application.Product,
      url: "/televisions",
      comparator: function(m){return parseInt(m.get("price"))}  
    });

    var FilteredTelevisions = Backbone.Collection.extend({
      model: Application.Product,
      comparator: function(m){return parseInt(m.get("price"))}    
    });

    Application.televisions = new Application.Products;
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
  },

  //The meat of assignment 2 is in productDetail
  productDetail: function(id){
    var DetailedProduct = Backbone.Model.extend({
      defaults: {
        name: "",
        description: "", 
        price: "",
        images: [],
        size: "", 
        type: "",
        brand: "",
        reviews: [],
        relatedItems: [] 
      },
      urlRoot: "/televisions"
    });

    var detailedProduct = new DetailedProduct({id:"1"});
    detailedProduct.fetch({success: function(){
      detailedProduct.set("relatedItems", new Application.Products(detailedProduct.get("relatedItems")));
      var productDetailView = new Application.productDetailView({
        tagName: "div",
        className: "productDetailDiv",
        model: detailedProduct
      });
      productDetailView.render();
      $('#wrapper').append(productDetailView.el);
      //needed this since addClass was firing before css loaded transitions
      setTimeout(function(){
        $('.productDetailDiv').addClass('showing');
      }, 1);

    }});
  }
});

Application.productDetailView = Backbone.View.extend({
  template: Handlebars.templates["ProductDetail"],
  initialize: function(){
    this.render = _.bind(this.render, this);
    this.closePane = _.bind(this.closePane, this);
    this.imgNext = _.bind(this.imgNext, this);

    this.currentImg = 0;   
    this.carouselClickLock = false;
  },
  render: function(){
    var context = this.model.attributes,
        output = this.template(context);
    this.$el.html(output);
    this.$(".rateit").rateit();
  },
  events: {
    "click a.closeDetails": "closePane",
    "click .imgNext.enabled": "imgNext",
    "click .imgPrev.enabled": "imgPrev"
    
  },
  closePane: function(event){
      this.$el.removeClass("showing");
      //wait for transition
      var that = this
      setTimeout(function(){
        that.remove();
      },1000);
  },
  imgNext: function(event){
    //If the next image does not exist return
    if(!this.model.attributes.images[this.currentImg + 1] || this.carouselClickLock) return;
    this.carouselClickLock = true;
    var nextImg = "img" + (this.currentImg + 1);
    var that = this;
    if($("." + nextImg).length){
      this.$(".carouselImgsWrapper").animate({"left": ((this.$(".carouselImgsWrapper").position().left - 400) + "px")});
      this.$(".currentPositionDot").animate({"left": ((this.$(".currentPositionDot").position().left + 23) + "px")}, function(){
        that.carouselClickLock = false;
      });    
    } else {
      this.$(".carouselImgsWrapper").append('<span><img class="' + nextImg +'" src="' + this.model.attributes.images[this.currentImg + 1] + '"></span>' );
      this.$(".carouselImgsWrapper").width((parseInt(this.$(".carouselImgsWrapper").width(), 10)+ 400) + "px");
      this.$(".carouselImgsWrapper").animate({"left": ((this.$(".carouselImgsWrapper").position().left - 400) + "px")});
      this.$(".currentPositionDot").animate({"left": ((this.$(".currentPositionDot").position().left + 23) + "px")}, function(){
        that.carouselClickLock = false;
      });
    }
    this.currentImg += 1;
    !this.model.attributes.images[this.currentImg + 1] && this.$(".imgNext").removeClass("enabled");
    this.$(".imgPrev").addClass("enabled");

  },
  imgPrev: function(event){
    //If the next image does not exist return
    if(!this.model.attributes.images[this.currentImg - 1] || this.carouselClickLock) return;
    this.carouselClickLock = true;
    var that = this;
    var nextImg = "img" + (this.currentImg - 1);
    if($("." + nextImg).length){
      this.$(".carouselImgsWrapper").animate({"left": ((this.$(".carouselImgsWrapper").position().left + 400) + "px")});
      this.$(".currentPositionDot").animate({"left": ((this.$(".currentPositionDot").position().left - 23) + "px")}, function(){
        that.carouselClickLock = false;
      }); 
    } 
    this.currentImg -= 1;
    !this.model.attributes.images[this.currentImg - 1] && this.$(".imgPrev").removeClass("enabled");
    this.$(".imgNext").addClass("enabled");
  }

});


Application.reviewView = Backbone.View.extend({
  template: "",
  initialize: "",
  render: ""
});


Application.appRouter = new AppRouter();

$(function() {  
  //possibly reuse the TvListView for related products?
  Handlebars.registerPartial("relatedList", Handlebars.templates['TvListView']);

  Backbone.history.start();

});
