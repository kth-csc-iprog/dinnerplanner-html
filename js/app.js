$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setNumberOfGuests(4);
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(202);

	console.log(model.getDishPrice(1));


	
	//And create the needed controllers and views

	//var view1 = new View1($("#view1"), model);
	var view2 = new View2($("#view2"), model);
	//var view3 = new View3($("#view3"), model);
	//var view4 = new View4($("#view4"), model);
	//var view5 = new View5($("#view5"), model);
	//var view6 = new View6($("#view6"), model);
});