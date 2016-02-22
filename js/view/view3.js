
var View3 = function (container, model) {
	this.getDish = container.find(".mat");
	this.search = container.find("#search_create_new");
	this.valStarter = container.find("#valStarter");
	this.valMain = container.find("#valMain");
	this.valDessert = container.find("#valDessert");
	this.chosenDish = container.find("#bildtext");

	model.addObserver(this);

	this.update = function(obj) {

	}




	//View 3 där småkvadraterna raddas upp för main, starter lr dessert!
	this.showDishes = function(type) {

		var kategori = model.getAllDishes(type);
		var dish = "";
		for (var i=0; i<kategori.length; i++){
			dish +="<div class='kvadrat'><button class ='dishButton' id='" + kategori[i].id + "'><img src='images/" + kategori[i].image + "' class='bild'></button><div class='dishname'>" + kategori[i].name + "</div>Lorem ispum dolor</div>";
			this.getDish.html(dish);
			}
	}
	
}

