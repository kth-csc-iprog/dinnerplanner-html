var SideViewController = function(view, model, sControl) {
	this.view = view;
	this.model = model;

	var plusButton = view.container.find("#plusGuest"); // used by controller
	var minusButton = view.container.find("#minusGuest");
	var closeButton = view.container.find(".close");

	plusButton.click(function(){
	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	minusButton.click(function(){
	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	view.confirmButton.click(function(){
			sControl.overview();
	});
	view.table.on("click", ".close", function(){
			model.removeDishFromMenu(this.id);
	});

	 
}