$(function() {
	//We instantiate our model
	var dinnerModel = new DinnerModel();
	console.log(dinnerModel.getNumberOfGuests());
	dinnerModel.setNumberOfGuests(2);


	dinnerModel.addDishToMenu(3);
	dinnerModel.addDishToMenu(2);
	dinnerModel.getTotalMenuPrice();
	dinnerModel.getFullMenu();
	dinnerModel.getSelectedDish("starter");



	//console.log(dinnerModel.getAllDishes());
	//console.log("just tried to log dishes[0] from app.js");
	

	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"));

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});