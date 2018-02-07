(function () {
	
	// Model
	const model = createDinnerModel()
	model.addDishToMenu(1)

	// Views + Controllers
	const mainView = createMainView(
		document.getElementById('mainView'),
		model
	)

	const sidebarView = createSidebarView(
		document.getElementById('sidebarView'),
		model
	)
	const sidebarController = createSidebarController(sidebarView, model)
	
	const dishSearchView = createDishSearchView(
		document.getElementById('dishSearchView'),
		model
	)
	const dishSearchController = createDishSearchController(dishSearchView, model)

	const dishDetailsView = createDishDetailsView(
		document.getElementById('dishDetailsView'),
		model
	)
	const dishDetailsController = createDishDetailsController(dishDetailsView, model)
	
	const statusBarView = createStatusBarView(
		document.getElementById('statusBar'),
		model
	)
	const statusBarController = createStatusBarController(statusBarView, model)

	const priceSummaryView = createPriceSummaryView(
		document.getElementById('priceSummary'),
		model
	)
	const priceSummaryController = createPriceSummaryController(priceSummaryView, model)

	const recipeSummaryView = createRecipeSummaryView(
		document.getElementById('recipeSummaryView'),
		model
	)
	const recipeSummaryController = createRecipeSummaryController(recipeSummaryView, model)

	// General State Controller
	const transitionFromMainViewToDishSearchView = () => {
		mainView.hide()
		sidebarView.show()
		dishSearchView.show()
	}

	const transitionFromDishSearchViewToDishDetailsView = () => {
		dishSearchView.hide()
		dishDetailsView.show()
	}

	const transitionFromDishDetailsViewToDishSearchView = () => {
		dishDetailsView.hide()
		dishSearchView.show()
	}

	const transitionFromDishSearchViewToPriceSummaryView = () => {
		sidebarView.hide()
		dishSearchView.hide()
		dishDetailsView.hide()

		statusBarView.show()
		priceSummaryView.show()
		recipeSummaryView.hide()
	}

	const transitionFromPriceSummaryViewToDishSearchView = () => {
		statusBarView.hide()
		priceSummaryView.hide()
		recipeSummaryView.hide()

		sidebarView.show()
		dishSearchView.show()
		dishDetailsView.hide()
	}

	const transitionFromPriceSummaryViewToRecipeSummaryView = () => {
		priceSummaryView.hide()
		recipeSummaryView.show()
	}

	mainView.startButton.onclick = transitionFromMainViewToDishSearchView
	sidebarView.confirmMenuButton.onclick = transitionFromDishSearchViewToPriceSummaryView
	statusBarView.backFromMenuSummaryButton.onclick = transitionFromPriceSummaryViewToDishSearchView
	dishDetailsView.backFromDishDetailsButton.onclick = transitionFromDishDetailsViewToDishSearchView
	priceSummaryView.printButton.onclick = transitionFromPriceSummaryViewToRecipeSummaryView

	const dishResults = document.getElementsByClassName('dishResult')
	for (const dishResult of dishResults) {
		dishResult.onclick = transitionFromDishSearchViewToDishDetailsView
	}

	mainView.show()
	sidebarView.hide()
	dishSearchView.hide()
	dishDetailsView.hide()
	statusBarView.hide()
	priceSummaryView.hide()
	recipeSummaryView.hide()

})()