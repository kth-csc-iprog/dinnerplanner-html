	
var OneDishViewController = function(view, model) {
	this.view = view;
	this.model = model;


	view.dish.click(function() {
		view.loadView();
		
	});
}