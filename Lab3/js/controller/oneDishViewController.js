var OneDishViewController = function(view, model, sControl) {
	var view = view;
	var model = model;
	var backButton = view.container.find("#backButton");
	var add = view.container.find("#add"); //kallas på i controller
	var sControl = sControl;

	add.click(function() {
		model.addDishToMenu(view.dish.id);
	});

	backButton.click(function() {
		sControl.backToSearch();
		});


}