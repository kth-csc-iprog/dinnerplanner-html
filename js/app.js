$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	console.log(model.getNumberOfGuests())
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

});
