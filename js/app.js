$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	
	//And create the needed controllers and views
	var header = new Header($("#header"), model);
	var headerController = new HeaderController(header, model);

	var view1 = new View1($("#view1"), model);
	var controller1 = new Controller1(view1, model);
	
	var view2 = new View2($("#view2"), model);
	var controller2 = new Controller2(view2, model);
	
	var view3 = new View3($("#view3"), model);
	var controller3 = new Controller3(view3, model);
	
	var view4 = new View4($("#view4"), model);
	var controller4 = new Controller4(view4, model);
	
	var view5 = new View5($("#view5"), model);
	var controller5 = new Controller5(view5, model);
	
	var view6 = new View6($("#view6"), model);
	var controller6 = new Controller6(view6, model);

});