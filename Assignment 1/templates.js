(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<article>\r\n			<a>\r\n				<img src=\"http://placekitten.com/100/100\" />\r\n				<h3>Title<h3> \r\n				<p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n				<h2>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.price)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\r\n			</a>\r\n			<a>Rating (stars, possibly jQueryUI?) </a> \r\n			</article>\r\n		";
  return buffer;
  }

  buffer += "<header>\r\n	<div>Logo</div> \r\n	<nav>\r\n		<span>Searchbar</span>\r\n		<span>Wishlist</span>\r\n		<span>Login</span>\r\n		<span>Cart</span>\r\n	</nav>\r\n </header>\r\n<section role=\"main\"> \r\n	<div>\r\n		<div>breadcrumbs</div>\r\n		<h2>CTA Title</h2>\r\n		<h3>CTA Label</h3>\r\n		<div>Television pics with prices</div>\r\n		<div>\r\n			<span>TVFinder</span>\r\n			<span>Range-Slider(price possibly jQueryUI?)</span>\r\n			<span>Dropdowns(type brand sort)</span>\r\n		</div>\r\n	</div>\r\n	<div> \r\n		<h4>Num Matches title</h4>\r\n		<button>clear filters</button>\r\n		<div> \r\n		";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	</div>\r\n</section>\r\n<footer>\r\n	<img src=\"http://placekitten.com/100/100\" />\r\n	<input/>\r\n	<button>sign up</button>\r\n	<div>column of links</div>\r\n	<div>\r\n		<h5>Money Centre Title</h5>\r\n		<img src=\"http://placekitten.com/100/100\"/>\r\n	</div>\r\n</footer>\r\n\r\n\r\n\r\n";
  return buffer;
  });
templates['television'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "			<article>\r\n			<a>\r\n				<img href=\"http://placekitten.com/100/100\" />\r\n				<h3>Title<h3> \r\n				<p>Description</p>\r\n				<h2>Price</h2>\r\n			</a>\r\n			<a>Rating (stars, possibly jQueryUI?) </a> \r\n			</article>";
  });
})();
