
var View3 = function (container, model) {
	this.getDish = container.find(".mat");

	//View 3 där småkvadraterna raddas upp för main, starter lr dessert!
		var kategori = model.getAllDishes("starter");
		var dish = "";
		for (var i=0; i<kategori.length; i++){
			dish +="<div class='kvadrat'><img src='images/" + kategori[i].image + "' class='bild'><div class='dishname'>" + kategori[i].name + "</div>Lorem ispum dolor</div>";
			this.getDish.html(dish);
			}
}