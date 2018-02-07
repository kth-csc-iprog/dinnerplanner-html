var DishView = function (container, model) {

	var dish = container.find('#dish');
	var dishName = container.find('#dishName');
	var dishImage = container.find('#dishImage');


	 // DISPLAY DISHES
		dish.append("<div class='col-xs-2'><img src=/images/"
													+model.getDish(200).image
													+"><p>"
													+ model.getDish(200).name
													+ "</p></img></div>");

	// LOAD THE USER SELECTED DISH
	dish.click(function(){


	})
}
