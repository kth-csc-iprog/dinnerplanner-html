var View2 = function (container, model) {
	this.numberOfGuests = container.find(".numberOfGuests");
	this.fullMenu = container.find(".titta");
	this.totalMenuPrice = container.find("#totalMenuPrice");

	this.totalMenuPrice.html(model.getTotalMenuPrice());
	this.numberOfGuests.html(model.getNumberOfGuests());

	model.addObserver(this);

	this.update = function(obj) {
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	var menutext = model.getFullMenu();
	var menu = "";
	for (var i=0; i<menutext.length; i++){

		var price = model.getDishPrice(menutext[i].id);

		menu +="<div class='row'><div class='col-md-4'>" + menutext[i].name + "</div><div class='col-md-4'>"+ price + " x " + model.getNumberOfGuests() +  "</div><div class='col-md-3 ri'>" + price*model.getNumberOfGuests()+"</div></div>";
		this.fullMenu.html(menu);
	}
}