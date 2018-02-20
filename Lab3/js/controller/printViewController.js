var PrintViewController = function(view, model, sControl) {
	this.view = view;
	this.model = model;
	var backButton = view.container.find("#Back");
	
	backButton.click(function() {
		sControl.backToSearch();
		});
}