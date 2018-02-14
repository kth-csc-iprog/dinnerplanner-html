var OverviewView = function (container, model) {

	this.container = container;
	this.model = model;

	this.backButton = container.find("#back");

	var header = container.find("#overviewHeader");
	




	//load view
	this.loadView = function() {
		nr= model.getNumberOfGuests();
		string = '<h2>My dinner: '+ nr +' people</h2>';
	
		header.html(string);
	
		
	}
		

	// load/update view.
	this.loadView();
	//attach as listener
	model.addObserver(this);
	
}
 
