$(function () {
	//We instantiate our model
	var model = new DinnerModel();
	model.addDishToMenu(1);
	model.addDishToMenu(2);
	model.addDishToMenu(100);

	var sidebarContainer = $("#sidebar");
	var welcomeContainer = $("#welcomeView");
	var dishSearchContainer = $("#dishSearchView");
	var dishItemContainer = $("#dishItemView");
	var dinnerPrintoutContainer = $("#dinnerPrintoutView");
	var goBackContainer = $("#goBackView");
	var dishDetailsContainer = $("#dishDetailsView");
	var dinnerOverContainer = $("#dinnerOverView")


	var sidebarView = new SidebarView(sidebarContainer, model);
	var dishSearchView = new DishSearchView(dishSearchContainer, model);
	var dishItemView = new DishItemView(dishItemContainer, model);
	var welcomeView = new WelcomeView(welcomeContainer, model);
	var dinnerPrintoutView = new DinnerPrintoutView(dinnerPrintoutContainer, model);
	var goBackView = new GoBackView(goBackContainer, model);
	var dishDetailsView = new DishDetailsView(dishDetailsContainer, model);
	var dinnerOverView = new DinnerOverView(dinnerOverContainer, model);

	// showWelcome();
	//showDishSearch();
	// showDinnerPrintout();
	// showDishDetails();
	  showDinnerOver();

	function showWelcome() {
		dinnerOverContainer.hide();
		sidebarContainer.hide();
		welcomeContainer.show();
		dishSearchContainer.hide();
		dishItemContainer.hide();
		goBackContainer.hide();
		dinnerPrintoutContainer.hide();
		dishDetailsContainer.hide();
	}

	function showDishSearch() {
		dinnerOverContainer.hide();
		sidebarContainer.show();
		welcomeContainer.hide();
		dishSearchContainer.show();
		dishItemContainer.show();
		dinnerPrintoutContainer.hide();
		goBackContainer.hide();
		dishDetailsContainer.hide();

	}

	function showDinnerPrintout() {
		dinnerOverContainer.hide();
		sidebarContainer.hide();
		welcomeContainer.hide();
		dishSearchContainer.hide();
		dishItemContainer.hide();
		dinnerPrintoutContainer.show();
		goBackContainer.show();
		dishDetailsContainer.hide();
	}

	function showDinnerOver() {
		sidebarContainer.hide();
		welcomeContainer.hide();
		dishSearchContainer.hide();	
		dishItemContainer.hide();
		dinnerOverContainer.show();
		dinnerPrintoutContainer.hide();
		goBackContainer.show();
		dishDetailsContainer.hide();
	}

	function showDishDetails() {
		dinnerOverContainer.hide();
		sidebarContainer.show();
		welcomeContainer.hide();
		dishSearchContainer.hide();
		dishItemContainer.hide();
		dishDetailsContainer.show();
		dinnerPrintoutContainer.hide();
		goBackContainer.hide();
	}


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});