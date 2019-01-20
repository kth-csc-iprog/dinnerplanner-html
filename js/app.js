$(function () {
	//We instantiate our model
	var model = new DinnerModel();

	var exampleView = new ExampleView($("#content"), model);
	var welcomeView = new WelcomeView($("#content"), model);
	var sidebarView = new SidebarView($("#sidebar"), model);
	var dishSearchView = new DishSearchView($("#content"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});