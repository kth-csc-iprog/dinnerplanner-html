var OverviewView = function (container, model) {

	this.container = container;
	this.model = model;

	
	//var numberOfGuests = container.find("#numberOfGuests");
	




	//load view
	this.loadView = function() {
		
		}
		

	// load/update view.
	this.loadView();
	//attach as listener
	model.addObserver(this);
	
}
 
