
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

	this.loadView = function() {

		var dishId = model.returnDishRecipe();
		

		this.dish = model.getDish(dishId);

		nrOfGuests = model.getNumberOfGuests();

		headlineDish.html(this.dish.name);
		picDish.html('<img src="images/' + this.dish.image + ' ">');
	 
		description.html(this.dish.description);

		Rubrik = 'Ingredients for ' + nrOfGuests + ' people';
		rubrik.html(Rubrik);
			
		var string = '<table class="table"><thead><th>mängd</th><th>sak</th><th>SEK</th><th>pris</th></thead>';

	    var sum = 0;

		for(i in this.dish.ingredients){
			Price = this.dish.ingredients[i].price*nrOfGuests;
			string += '<tr><td>' + this.dish.ingredients[i].quantity + ' ' + this.dish.ingredients[i].unit + '</td><td>' + this.dish.ingredients[i].name + '</td><td>SEK</td><td>' + Price + '</td></tr>';
			sum += Price;
		}
		summa= '<td >SEK</td> <td>' + sum + '</td>';

		tableString.html(string);
		sumString.html(summa);

	}

	
		
		

	// load/update view.
	//this.loadView();
	//attach as listener
	model.addObserver(this);
	this.updateView = function(args) {
		this.loadView();
		}
	
}
 