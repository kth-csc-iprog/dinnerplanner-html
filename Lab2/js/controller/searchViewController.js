	
var SearchViewController = function(view, model) {
	this.view = view;
	this.model = model;

	//var searchButton = view.container.find("#searchButton");

	view.searchButton.click(function() {
		view.loadView();
		
	});
}