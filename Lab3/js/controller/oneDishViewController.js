var OneDishViewController = function(view, model, sControl) {
	var view = view;
	var model = model;
	var backButton = view.container.find("#backButton");
	var add = view.container.find("#add"); //kallas på i controller
	var sControl = sControl;

	add.click(function() {
		model.addDishToMenu(model.displayedDish);
	});

	backButton.click(function() {
		sControl.backToSearch();
		//model.displayedDish ="";


		});


}