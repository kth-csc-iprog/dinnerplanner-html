
/*main view for view3 "dish overview"
gets the pictures and name of the dishes for view2 and 4 */ 
var OneDishView = function (container, model) {
	this.container = container;
	this.model = model;

	/*måste ämdras till hämtning av vald dish genom click... */
	
	this.backButton = container.find("#backButton");
	this.add = container.find("#add");

	var headlineDish = container.find("#headlineDish");
	var picDish = container.find("#imgDish");
	var description = container.find("#description");
	var Table = container.find("#table");
	var Summa = container.find("#td1");
	var rubrik = container.find("#ingrFor");

	

	this.loadView = function() {

		var dish = model.returnDishRecipe();
		console.log(dish);

		this.Dish = model.getDish(dish);

		nrOfGuests = model.getNumberOfGuests();

		headlineDish.html(this.Dish.name);
		picDish.html('<img src="images/' + this.Dish.image + ' ">');
	 
		description.html(this.Dish.description);

		Rubrik = 'Ingredients for ' + nrOfGuests + ' people';
		rubrik.html(Rubrik);
			
		var string = '<table class="table"><thead><th>mängd</th><th>sak</th><th>SEK</th><th>pris</th></thead>';

	    var sum = 0;

		for(i in this.Dish.ingredients){
			Price = this.Dish.ingredients[i].price*nrOfGuests;
			string += '<tr><td>' + this.Dish.ingredients[i].quantity + ' ' + this.Dish.ingredients[i].unit + '</td><td>' + this.Dish.ingredients[i].name + '</td><td>SEK</td><td>' + Price + '</td></tr>';
			sum += Price;
		}
		summa= '<td >SEK</td> <td>' + sum + '</td>';

		Table.html(string);
		Summa.html(summa);

	}

	
		
		

	// load/update view.
	//this.loadView();
	//attach as listener
	model.addObserver(this);
	this.updateView = function(args) {
		this.loadView();
		}
	
}
 