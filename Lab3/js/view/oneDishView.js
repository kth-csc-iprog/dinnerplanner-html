
/*main view for view3 "dish overview"
gets the pictures and name of the dishes for view2 and 4 */ 
var OneDishView = function (container, model) {
	this.container = container;
 	this.model = model;

	

	var headlineDish = container.find("#headlineDish");
	var picDish = container.find("#imgDish");
	var description = container.find("#description");
	var tableString = container.find("#table");
	var sumString = container.find("#td1");
	var rubrik = container.find("#ingrFor");

	var loadRecipe = function(dish) {
		headlineDish.html(dish.title);
		picDish.html('<img src="' + dish.image + '">');
		description.html(dish.instructions);
		var noServings = dish.servings;
		var priceServing = dish.pricePerServing;
		//hämta antal servings : 4 personer

		//hämta totalpris

	}

	this.updateRecipe = function() {
		nrOfGuests = model.getNumberOfGuests();

		//nytt totalpris 

		// ingrediens/antal servibngs * nrOfGuests
	}
	this.loadView = function() {

		var dishId = model.returnDishRecipe();
		//nrOfGuests = model.getNumberOfGuests();
		model.getDish(dishId, loadRecipe);
		var string = '<table class="table"><thead><th>Amount</th><th>Ingredient</th><th> </th><th>pris</th></thead>';
		string += "</table>";
		tableString.html(string);

		

		

/*
		
		picDish.html('<img src="https://spoonacular.com/recipeImages/' + this.dish.image + ' ">');
	 
		description.html(this.dish.description);

		Rubrik = 'Ingredients for ' + nrOfGuests + ' people';
		rubrik.html(Rubrik);
			
		var string = '<table class="table"><thead><th>mängd</th><th>sak</th><th>SEK</th><th>pris</th></thead>';

	    var sum = 0;

		for(i in this.dish.ingredients){
			var Price = this.dish.ingredients[i].price*nrOfGuests;
			var Quantity = this.dish.ingredients[i].quantity*nrOfGuests;
			string += '<tr><td>' + Quantity + ' ' + this.dish.ingredients[i].unit + '</td><td>' + this.dish.ingredients[i].name + '</td><td>SEK</td><td>' + Price + '</td></tr>';
			sum += Price;
		}
		summa= '<td >SEK</td><td> ' + ' ' + sum + '</td>';
		string += "</table>";
		tableString.html(string);
		sumString.html(summa);*/

	}

	
		
		

	// load/update view.
	//this.loadView();
	//attach as listener
	//model.addObserver(this);
	this.updateView = function(args) {
		switch(args) {
		    case "guestsChanged":
				this.loadView();
		        break;
		     case "toRecipe":
				this.loadView();
		        break;
		        
		    default:
		    	break;
		}
	}
	
}
 