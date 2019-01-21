$(function () {
	//We instantiate our model
	var model = new DinnerModel();

	var sidebarContainer = $("#sidebar");
	var welcomeContainer = $("#welcomeView");
	var dishSearchContainer = $("#dishSearchView");
	var dishItemContainer = $("#dishItemView");

	var welcomeView = new WelcomeView(welcomeContainer, model);
	var sidebarView = new SidebarView(sidebarContainer, model);
	var dishSearchView = new DishSearchView(dishSearchContainer, model);
	var dishItemView = new DishItemView(dishItemContainer, model);

	function showWelcome() {

	}

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});