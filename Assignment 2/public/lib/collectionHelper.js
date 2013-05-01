Handlebars.registerHelper('collection', function(collectionObj, options){
	ret = ""
	collectionObj.each(function(m){
		ret += addOne(m);
	});

	return ret;

	function addOne(model){
		return options.fn(model.attributes);
	}

	//TODO: create remove function
	//How can I access the correct piece for the model? use handlebars data? if so how?
	
	//TODO: add listeners for collection add/remove events
	//How can I inject an added model in the correct place so the output is sorted?
});