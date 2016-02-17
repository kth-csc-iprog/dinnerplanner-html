$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	var view2 = new View2($("#view2"), model);
	var view3 = new View3($("#view3"), model);
	var view4 = new View4($("#view4"), model);
	var view5 = new View5($("#view5"), model);
	var view6 = new View6($("#view6"), model);
	

});
