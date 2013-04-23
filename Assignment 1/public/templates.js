(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\r\n\r\n\r\n\r\n\r\n";
  });
templates['television'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "			<article>\r\n			<a>\r\n				<img href=\"http://placekitten.com/100/100\" />\r\n				<h3>Title<h3> \r\n				<p>Description</p>\r\n				<h2>Price</h2>\r\n			</a>\r\n			<a>Rating (stars, possibly jQueryUI?) </a> \r\n			</article>";
  });
templates['TvFormView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div>\r\n  <span>TVFinder</span>\r\n  <span class=\"sizes\">30-55</span><div class=\"noUiSlider\"></div>\r\n  <label for=\"screenType\">Type\r\n    <select name=\"screenType\">\r\n      <option value=\"any\" selected=\"selected\">Any</option>\r\n    </select>\r\n  </label>\r\n  <label for=\"brand\">Brand\r\n    <select name=\"brand\">\r\n      <option value=\"any\" selected=\"selected\">Any</option>\r\n    </select>\r\n  </label>\r\n  <label for=\"sortDirection\">Sort\r\n  <select name=\"sortDirection\">\r\n    <option value=\"pricelowtohigh\" selected=\"selected\">Price: Low to High</option>\r\n  </select></label>\r\n</div>\r\n<div> \r\n<h4>Num Matches <span id=\"nummatches\"></span></h4>\r\n<button id=\"clearfilters\">clear filters</button>\r\n</div> ";
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
    + "</h2>\r\n  </a>\r\n  <a>Rating (stars, possibly jQueryUI?) </a> \r\n  </article>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();
