var ExampleView = function (container, model) {
	
	var numberOfGuests = container.find("#numberOfGuests");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	numberOfGuests.html("Hello World");
}
 
