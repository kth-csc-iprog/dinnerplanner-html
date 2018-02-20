var OverviewViewController = function(view, model, sControl) {
	this.view = view;
	this.model = model;

	var backButton = view.container.find("#back");
	var printButton = view.container.find("#print");

	backButton.click(function() {
		sControl.backToSearch();
		});

	printButton.click(function(){
		sControl.printRecipe();	
		});

	 
}