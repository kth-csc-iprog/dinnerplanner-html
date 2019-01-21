$(function () {
	//We instantiate our model
	var model = new DinnerModel();

	var sidebarContainer = $("#sidebar");
	var welcomeContainer = $("#welcomeView");
	var dishSearchContainer = $("#dishSearchView");
	var dishItemContainer = $("#dishItemView");
	var dinnerPrintoutContainer = $("#dinnerPrintoutView");
	var goBackContainer = $("#goBackView");


	var sidebarView = new SidebarView(sidebarContainer, model);
	var dishSearchView = new DishSearchView(dishSearchContainer, model);
	var dishItemView = new DishItemView(dishItemContainer, model);
	var welcomeView = new WelcomeView(welcomeContainer, model);
	var dinnerPrintoutView = new DinnerPrintoutView(dinnerPrintoutContainer, model);
	var goBackView = new GoBackView(goBackContainer, model);

	// showWelcome();
	 showDishSearch();
	// showDinnerPrintout();

	function showWelcome() {
		sidebarContainer.hide();
		welcomeContainer.show();
		dishSearchContainer.hide();
		dishItemContainer.hide();
		goBackContainer.hide();
		dinnerPrintoutContainer.hide();
	}

	function showDishSearch() {
		sidebarContainer.show();
		welcomeContainer.hide();
		dishSearchContainer.show();
		dishItemContainer.show();
		dinnerPrintoutContainer.hide();
		goBackContainer.hide();
	}

	function showDinnerPrintout() {
		sidebarContainer.hide();
		welcomeContainer.hide();
		dishSearchContainer.hide();
		dishItemContainer.hide();
		dinnerPrintoutContainer.show();
		goBackContainer.show();
	}


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});
