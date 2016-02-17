var ExampleView = function (container, model) {
	this.numberOfGuests = container.find(".numberOfGuests");
	this.fullMenu = container.find(".titta");
	this.totalMenuPrice = container.find("#totalMenuPrice");

	//view5 med menyn men tre bilder; förrätt, main o dessert
	var menu = model.getFullMenu();
	var food = "";
	for (var i=0; i<menu.length; i++){
		food +="<div class='kvadrat'><img src='images/" + menu[i].image + "' class='bild'><div class='dishname'>" + menu[i].name + "</div></div>";
		this.fullMenu.html(food);
	}
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalMenuPrice.html(model.getTotalMenuPrice());
}