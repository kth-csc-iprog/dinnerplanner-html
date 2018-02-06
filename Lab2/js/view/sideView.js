
 
var SideView = function (container, model) {

	this.container = container;

	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	
}
 
