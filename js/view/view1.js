var View1 = function (container, model) {
	this.welcomeButton = container.find("#create_new");

	model.addObserver(this);

<<<<<<< Updated upstream
	this.update = function(Object) {
		return;
=======
	this.update = function(obj) {
		
>>>>>>> Stashed changes
	}
}