
var ExampleView = function (container, model) {
	this.numberOfGuests = container.find(".numberOfGuests");
	this.fullMenu = container.find(".titta");
	this.totalMenuPrice = container.find("#totalMenuPrice");
	this.getDish = container.find(".mat");

	//View 2&3 där småkvadraterna raddas upp för main, starter lr dessert!
		var kategori = model.getAllDishes("dessert");
		var dish = "";
		for (var i=0; i<kategori.length; i++){
			dish +="<div class='kvadrat'><img src='images/" + kategori[i].image + "' class='bild'><div class='dishname'>" + kategori[i].name + "</div>Lorem ispum dolor</div>";
			this.getDish.html(dish);
			}

		var menutext = model.getFullMenu();
		var menu = "";
		for (var i=0; i<menutext.length; i++){
			menu +="<p>" + menutext[i].name + "</p>";
			this.fullMenu.html(menu);
			}
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalMenuPrice.html(model.getTotalMenuPrice());
}