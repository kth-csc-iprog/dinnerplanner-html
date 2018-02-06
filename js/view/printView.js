var PrintView = function (container, model) {

	var printDishes = container.find('#printDishes');

	for(var i = 1; i < 4; i++ ){
		printDishes.append("<div class='row'><div class='col-xs-2'><img src=/images/"
		 	+ model.getDish(i).image
		 	+"></img></div><div class='col-xs-2'><h4>"
		 	+ model.getDish(i).name
		 	+ "</h4><p>"
		 	+ model.getDish(i).type
		 	+ "</p></div><div class='col-xs-6'>"
		 	+ model.getDish(i).description
		 	+ "</div></div>");
	}
}
