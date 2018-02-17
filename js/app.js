$(function() {
	//We instantiate our model (STEP 1)
	var model = new DinnerModel();

	//We instantiate our views (STEP 2)
	var welcomeView = new WelcomeView($("#welcomeView"), model);
	var sideView = new SideView($("#sideView"), model);
	var searchView = new SearchView($("#searchView"), model);
	var dishView = new DishView($("#dishView"), model);
	var dishDetail = new DetailView($("#detailView"), model);
	var menuView = new MenuView($("#menuView"), model);
	var printView = new PrintView($("#printView"), model);

	//Instantiate controller (STEP 5)
	var sideCtrl = new SideController(model, sideView);

	//The General Controller can use .show() to hide/show views. sideView.show() calls the rebuilds function  (STEP 7 / STEP 13)
	sideView.show();

	// Instatiating the controller
	// var controller = new TaskController(view, model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
