window.onload= function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setGuestNum(5);

	//var guestNum = new People($("#Sidebarview"), model);

	//var price = new Price($("#Sidebarview"), model);

	// And create the instance of ExampleView
	//const exampleView = new ExampleView(document.querySelector("#exampleView"));
	const mealsView = new MealsView(document.querySelector("#Image"), model);
    mealsView.addMealButtons();

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */
};
