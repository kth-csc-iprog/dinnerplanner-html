var SideViewController = function(view, model) {
	this.view = view;
	this.model = model;

	 view.plusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 });

	 view.minusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 });
	 
}