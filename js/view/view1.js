var View1 = function (container, model) {
	this.welcomeButton = container.find("#create_new");

	model.addObserver(this);

	this.update = function(Object) {
		return;
	}
}