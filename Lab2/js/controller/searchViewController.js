
var SearchViewController = function(view, model) {
	this.view = view;
	this.model = model;
	var dishesView = new Array();

	//dishesView = $(".thumbnail");
	dishesView = view.container.find(".thumbnail");
	console.log(dishesView);


	view.searchButton.click(function() {
		view.loadView();
	});

	// lägg till knapp på varje rätt
	for ( var i = 0; i < dishesView.length; i++) {
		dishesView[i].addEventListener("click", function() {
			// spara id i modellens displayedDish, och notify att uppdater vy. 
			model.selectDishRecipe(this.id);
			//model.displayedDish = this.id;
			console.log(this.id);
			console.log("och i modellen:");
			console.log(model.displayedDish); // funktion istället så att den notifies. 
			//view.container.hide();
			
		});
	}
	
}