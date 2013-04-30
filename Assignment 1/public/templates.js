(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
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
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <article>\r\n  <a>\r\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\r\n    <h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3> \r\n    <p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n    <h2>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.price)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\r\n  </a>\r\n  <div class=\"rateit bigstars\" data-rateit-starwidth=\"20\" data-rateit-starheight=\"20\" data-rateit-value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-rateit-ispreset=\"true\" data-rateit-max=\"5\" data-rateit-readonly=\"true\"></div> \r\n  </article>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();
