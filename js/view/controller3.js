var Controller3 = function(view, model ) {
	view.valStarter.click(function(){
		view.showDishes("starter");
	});

	view.valDessert.click(function(){
		view.showDishes("dessert");
	});

	view.valMain.click(function(){
		view.showDishes("main dish");
	});


	view.straw.click(function(){
		view.showDishes("starters");
	});

	view.chosenDish.click(function(){
		console.log("HJGJG");
		$("#view3").hide();
		$("#view4").show();
	});

}