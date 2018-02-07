var DishView = function (container, model) {

	var dish = container.find('#dish');
	var dishName = container.find('#dishName');
	var dishImage = container.find('#dishImage');


	 // DISPLAY DISHES
	 for (var i = 1; i < 4; i++) {

		dish.append("<div class='col-xs-8'><img src=/images/"
													+model.getDish(i).image
													+"><p>"
													+ model.getDish(i).name
													+ "</p></img></div>");
												}
	// LOAD THE USER SELECTED DISH
	// dish.click(function(){
  //
  //
	// })
}
