var SideViewController = function(view, model, sControl) {
	this.view = view;
	this.model = model;

	var plusButton = view.container.find("#plusGuest"); // used by controller
	var minusButton = view.container.find("#minusGuest");
	var confirmButton = view.container.find("#confirm");


	 plusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 });

	 minusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 });

	 confirmButton.click(function(){
			sControl.overview();
		});
	 
}