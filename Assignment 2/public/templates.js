(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ProductDetail'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<h2>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n<a class=\"closeDetails\"></a>\r\n<div class=\"rateit\"></div>\r\n<a>one review</a>\r\n<a>Write a Review</a>\r\n<a>Ask A Question</a>\r\n<h3>";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n<div class=\"carousel\"></div>\r\n<div class=\"overview\">\r\n	<h2>About</h4>\r\n	<p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n	<div class=\"interact\">\r\n		<select>Qty</select>\r\n		<button>Add to Cart</button>\r\n		<a>Find This Product Localy</a>\r\n		<a>Calculate Arrival Date</a>\r\n		<a>Share With a Friend</a>\r\n	</div>	\r\n</div>\r\n<div class=\"relatedItems\">\r\n	<h2>People Who Viewed This Item Also Viewed</h2>\r\n	<button>See More</button>\r\n		";
  stack1 = self.invokePartial(partials.relatedList, 'relatedList', depth0.relatedItems, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n<div class=\"detailedSpecs\">\r\n	<h2>Product Details</h2>\r\n	<button>Have A Question?</button>\r\n	<ul>\r\n		<li>Full Description</li>\r\n		<li>Specifications</li>\r\n		<li>Warranty</li>\r\n		<li>Financing</li>\r\n		<li>Gifting</li>\r\n	</ul>\r\n	<p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n</div>\r\n<div id=\"reviewsView\"></div>\r\n";
  return buffer;
  });
templates['television'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "			<article>\r\n			<a>\r\n				<img href=\"http://placekitten.com/100/100\" />\r\n				<h3>Title<h3> \r\n				<p>Description</p>\r\n				<h2>Price</h2>\r\n			</a>\r\n			<a>Rating (stars, possibly jQueryUI?) </a> \r\n			</article>";
  });
templates['TvFormView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"finder-form\">\r\n  <a class=\"finder-logo\"><strong>TV</strong>Finder</a>\r\n  <div class=\"noUiSlider\"></div>\r\n  <div class=\"select-group\">\r\n    <label class=\"display-label\" for=\"screenType\">Type</label>\r\n    <label class=\"select-style\">\r\n    <select name=\"screenType\">\r\n        <option value=\"any\" selected=\"selected\">Any</option>\r\n      </select>\r\n    <label>\r\n  </div>\r\n  <div class=\"select-group\">\r\n    <label class=\"display-label\" for=\"brand\">Brand</label>\r\n    <label class=\"select-style\">\r\n      <select name=\"brand\">\r\n        <option value=\"any\" selected=\"selected\">Any</option>\r\n      </select>\r\n    </label>\r\n  </div>\r\n  <div class=\"select-group\">\r\n    <label class=\"display-label\" for=\"sortDirection\">Sort</label>\r\n    <label class=\"select-style\">\r\n      <select name=\"sortDirection\">\r\n        <option value=\"pricelowtohigh\" selected=\"selected\">Price: Low to High</option>\r\n        <option value=\"pricehightolow\">Price: High to Low</option>\r\n      </select>\r\n    </label>\r\n  </div>\r\n</div>\r\n<div class=\"horizontal-rule\"><span></span></div>\r\n<div class=\"sub-finder-form\"> \r\n<h4><span id=\"nummatches\"></span> Matches <span class=\"fit-criteria-notice\">For televisions fitting that criteria</span></h4>\r\n<button id=\"clearfilters\">clear filters</button>\r\n</div> ";
  });
templates['TvListView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <article>\r\n  <a href=\"#detail/1\">\r\n    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n    <h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3> \r\n    <p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n    <h2>";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n  </a>\r\n  <div class=\"rateit bigstars\" data-rateit-starwidth=\"20\" data-rateit-starheight=\"20\" data-rateit-value=\"";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-rateit-ispreset=\"true\" data-rateit-max=\"5\" data-rateit-readonly=\"true\"></div> \r\n  </article>\r\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.collection),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "collection", depth0, options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ProductDetail'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<h2>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n<a href=\"#home\" class=\"closeDetails\"></a>\r\n<div class=\"rateit\"></div>\r\n<a>one review</a>\r\n<a>Write a Review</a>\r\n<a>Ask A Question</a>\r\n<h3>";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n<div class=\"carousel\"></div>\r\n<div class=\"overview\">\r\n	<h2>About</h4>\r\n	<p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n	<div class=\"interact\">\r\n		<select>Qty</select>\r\n		<button>Add to Cart</button>\r\n		<a>Find This Product Localy</a>\r\n		<a>Calculate Arrival Date</a>\r\n		<a>Share With a Friend</a>\r\n	</div>	\r\n</div>\r\n<div class=\"relatedItems\">\r\n	<h2>People Who Viewed This Item Also Viewed</h2>\r\n	<button>See More</button>\r\n		";
  stack1 = self.invokePartial(partials.relatedList, 'relatedList', depth0.relatedItems, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n<div class=\"detailedSpecs\">\r\n	<h2>Product Details</h2>\r\n	<button>Have A Question?</button>\r\n	<ul>\r\n		<li>Full Description</li>\r\n		<li>Specifications</li>\r\n		<li>Warranty</li>\r\n		<li>Financing</li>\r\n		<li>Gifting</li>\r\n	</ul>\r\n	<p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n</div>\r\n<div id=\"reviewsView\"></div>\r\n";
  return buffer;
  });
templates['television'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "			<article>\r\n			<a>\r\n				<img href=\"http://placekitten.com/100/100\" />\r\n				<h3>Title<h3> \r\n				<p>Description</p>\r\n				<h2>Price</h2>\r\n			</a>\r\n			<a>Rating (stars, possibly jQueryUI?) </a> \r\n			</article>";
  });
templates['TvFormView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"finder-form\">\r\n  <a class=\"finder-logo\"><strong>TV</strong>Finder</a>\r\n  <div class=\"noUiSlider\"></div>\r\n  <div class=\"select-group\">\r\n    <label class=\"display-label\" for=\"screenType\">Type</label>\r\n    <label class=\"select-style\">\r\n    <select name=\"screenType\">\r\n        <option value=\"any\" selected=\"selected\">Any</option>\r\n      </select>\r\n    <label>\r\n  </div>\r\n  <div class=\"select-group\">\r\n    <label class=\"display-label\" for=\"brand\">Brand</label>\r\n    <label class=\"select-style\">\r\n      <select name=\"brand\">\r\n        <option value=\"any\" selected=\"selected\">Any</option>\r\n      </select>\r\n    </label>\r\n  </div>\r\n  <div class=\"select-group\">\r\n    <label class=\"display-label\" for=\"sortDirection\">Sort</label>\r\n    <label class=\"select-style\">\r\n      <select name=\"sortDirection\">\r\n        <option value=\"pricelowtohigh\" selected=\"selected\">Price: Low to High</option>\r\n        <option value=\"pricehightolow\">Price: High to Low</option>\r\n      </select>\r\n    </label>\r\n  </div>\r\n</div>\r\n<div class=\"horizontal-rule\"><span></span></div>\r\n<div class=\"sub-finder-form\"> \r\n<h4><span id=\"nummatches\"></span> Matches <span class=\"fit-criteria-notice\">For televisions fitting that criteria</span></h4>\r\n<button id=\"clearfilters\">clear filters</button>\r\n</div> ";
  });
templates['TvListView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <article>\r\n  <a href=\"#detail/1\">\r\n    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n    <h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3> \r\n    <p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n    <h2>";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n  </a>\r\n  <div class=\"rateit bigstars\" data-rateit-starwidth=\"20\" data-rateit-starheight=\"20\" data-rateit-value=\"";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-rateit-ispreset=\"true\" data-rateit-max=\"5\" data-rateit-readonly=\"true\"></div> \r\n  </article>\r\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.collection),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "collection", depth0, options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });
})();
