
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
	var noServings = "";
	var priceServing = "";
	var ingredients = [];
	const self = this;

	var loadRecipe = function(dish) {
		
		
		headlineDish.html(dish.title);
		picDish.html('<img src="' + dish.image + '">');
		description.html(dish.instructions);
		noServings = dish.servings;
		priceServing = dish.pricePerServing;
		ingredients = dish.extendedIngredients;
		console.log("ingredienslista: " + ingredients);

		//hämta antal servings : 4 personer

		//hämta totalpris

		//uppdatera tabellen rätt antal
		updateRecipe();

	}

	var updateRecipe = function() {

		//console.log("inne i updateREcipe");
		nrOfGuests = model.getNumberOfGuests();

		//nytt totalpris 
		var totalPrice = Math.round(priceServing * nrOfGuests*10)/10; //model.getDishPrice()

		// ingrediens/antal servibngs * nrOfGuests

		var string = '<table class="table"><thead><th>Amount</th><th>Ingredient</th></thead>';

		for(i in ingredients){
			//var Price = ingredients[i].price*nrOfGuests;
			var quantity = ingredients[i].amount * nrOfGuests;
			string += '<tr><td>' + quantity + ' ' + ingredients[i].unit + '</td><td>' + ingredients[i].name + '</td></tr>';
		}


		string += "</table>";
		var summa= '<table class="table"><thead><th>SEK</th><th> ' + ' ' + totalPrice + '</th></thead></table>';
		tableString.html(string);
		sumString.html(summa);

	}

	this.loadView = function() {
		clearView();
		var dishId = model.returnDishRecipe();
		//nrOfGuests = model.getNumberOfGuests();
		model.getDish(dishId, loadRecipe);

	}

	var clearView = function() {
		headlineDish.html("");
		picDish.html("");
		description.html("");
		tableString.html("");
		sumString.html("");

	}

	
	//attach as listener
	model.addObserver(this);
	
	this.updateView = function(args) {
		switch(args) {
		    case "guestsChanged":
				updateRecipe();
		        break;
		     case "toRecipe":
				this.loadView();
		        break;
		     case "dishFetched":
		     	loadRecipe()
		    	break;
		    case "clearView":
		     	loadRecipe()
		     	break;

		        
		    default:
		    	break;
		}
	}
	
}
 