var Controller3 = function(view, model ) {
	//view.showDishes("starter");

	view.valDessert.click(function(){
		view.showDishes("dessert");
	});

	view.valMain.click(function(){
		view.showDishes("main dish");
	});

	view.valStarter.click(function(){
		view.showDishes("starter");
	});

}