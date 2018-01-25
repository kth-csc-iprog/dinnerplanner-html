(function () {
	//We instantiate our model
	const model = createDinnerModel()

	// Create the instances of the Views
	const sidebarView = createSidebarView(
		document.getElementById('sidebarView'),
		model
	)

	// const welcomeView = createWelcomeView(
	// 	document.getElementById('mainView'),
	// 	model
	// )
	
	const dishSearchView = createDishSearchView(
		document.getElementById('dishSearchView'),
		model
	)

	// const dishDetailsView = createDishDetailsView(
	// 	document.getElementById('dishDetailsView'),
	// 	model
	// )
	
	const statusBarView = createStatusBarView(
		document.getElementById('statusBar'),
		model
	)

	const priceSummaryView = createPriceSummaryView(
		document.getElementById('priceSummary'),
		model
	)

	// const recipeSummaryView = createRecipeSummaryView(
	// 	document.getElementById('recipeSummaryView'),
	// 	model
	// )

	document.getElementById('startButton').onclick = transitionFromMainViewToDishSearchView
  document.getElementById('confirmMenuButton').onclick = transitionFromDishSearchViewToPriceSummaryView
  document.getElementById('backFromMenuSummaryButton').onclick = transitionFromPriceSummaryViewToDishSearchView
  document.getElementById('backFromDishDetailsButton').onclick = transitionFromDishDetailsViewToDishSearchView
	document.getElementById('printButton').onclick = transitionFromPriceSummaryViewToRecipeSummaryView
	const dishResults = document.getElementsByClassName('dishResult')
	for (const dishResult of dishResults) {
		dishResult.onclick = transitionFromDishSearchViewToDishDetailsView
	}

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

})()