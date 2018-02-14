
var SearchViewController = function(view, model, sControl) {
	this.view = view;
	this.model = model;
	this.sControl = sControl;
	var dishesView = new Array();


	//dishesView = $(".thumbnail");
	dishesView = view.container.find(".thumbnail");
	console.log(dishesView);


	view.searchButton.click(function() {
		view.loadView();
	});

	view.picBox.on("click", ".thumbnail", function(){
		model.selectDishRecipe(this.id);
			//model.displayedDish = this.id;
			console.log(this.id);
			console.log("och i modellen:");
			console.log(model.returnDishRecipe()); // funktion istället så att den notifies. 
			//view.container.hide();
			
			sControl.oneDish();
			
	})
	// lägg till knapp på varje rätt
	// for ( var i = 0; i < dishesView.length; i++) {
	// 	dishesView[i].addEventListener("click", function() {
	// 		// spara id i modellens displayedDish, och notify att uppdater vy. 
			
	// 	});
	// }
	
}