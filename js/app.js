$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView
	var welcomeView = new WelcomeView($("#welcomeView"), model);
	var sideView = new SideView($("#sideView"), model);
	var searchView = new SearchView($("#searchView"), model);
	var dishView = new DishView($("#dishView"), model);
	var dishDetail = new DetailView($("#detailView"), model);
	var menuView = new MenuView($("#menuView"), model);
	var printView = new PrintView($("#printView"), model);

	// Instatiating the controller
	// var controller = new TaskController(view, model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
