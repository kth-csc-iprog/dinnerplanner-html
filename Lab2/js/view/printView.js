var PrintView = function (container, model) {
	this.container = container;
	this.model = model;


	//load view
	this.loadView = function() {


	}
		
		

	// load/update view.
	this.loadView();
	//attach as listener
	model.addObserver(this);
}