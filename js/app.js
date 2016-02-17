$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setNumberOfGuests(4);
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(202);

	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	
	
});