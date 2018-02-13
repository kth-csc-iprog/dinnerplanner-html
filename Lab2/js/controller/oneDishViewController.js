var OneDishViewController = function(view, model) {
	this.view = view;
	this.model = model;

	view.add.click(function() {
		model.addDishToMenu(view.Dish.id);

	});


}