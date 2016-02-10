$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.getSelectedDish();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

});
