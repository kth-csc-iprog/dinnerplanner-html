
/*main view for view3 "dish overview"
gets the pictures and name of the dishes for view2 and 4 */ 
var MainView3 = function (container, model) {
	var dish = 100;
	var Dish = model.getDish(dish);
	var headlineDish = container.find("#headlineDish")
	headlineDish.html(model.getDish(dish).name);
	
	var picDish = container.find("#imgDish");
	picDish.html('<img src="images/' + Dish.image + ' ">');
 
 	var description = container.find("#description");
	description.html(Dish.description);



	Rubrik = 'Ingredients for ' + model.getNumberOfGuests() + ' people';
	var rubrik = container.find("#ingrFor");
	rubrik.html(Rubrik);
		
	var Table = container.find("#table");
	var string = '<table class="table"><thead><th>mängd</th><th>sak</th><th>SEK</th><th>pris</th></thead>';

    var sum = 0;

	for(i in Dish.ingredients){
		string += '<tr><td>' + Dish.ingredients[i].quantity + ' ' + Dish.ingredients[i].unit + '</td><td>' + Dish.ingredients[i].name + '</td><td>SEK</td><td>' + Dish.ingredients[i].price + '</td></tr>';
	}

	string += '<tr><td><button class="btn btn-default">Add to menu</button></td><td></td><td>SEK</td><td>'+ sum + '</td></tr></table>';
	Table.html(string);
	
}
 