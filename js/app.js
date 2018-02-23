(function () {
	
	// Model
	const model = createDinnerModel()

	// Views + Controllers
	const mainView = createMainView(
		document.getElementById('mainView'),
		model
	)
	
	const sidebarView = createSidebarView(
		document.getElementById('sidebarView'),
		model
	)
	
	const dishSearchView = createDishSearchView(
		document.getElementById('dishSearchView'),
		model
	)
	
	const dishDetailsView = createDishDetailsView(
		document.getElementById('dishDetailsView'),
		model
	)
	
	const statusBarView = createStatusBarView(
		document.getElementById('statusBar'),
		model
	)
	
	const priceSummaryView = createPriceSummaryView(
		document.getElementById('priceSummary'),
		model
	)
	
	const recipeSummaryView = createRecipeSummaryView(
		document.getElementById('recipeSummaryView'),
		model
	)
	
	// General State Controller
	const generalStateController = {
		transitionFromDishDetailsToDishSearch: () => {
			dishDetailsView.hide()
			dishSearchView.show()
		},
		transitionFromDishSearchToDishDetails: (event) => {
			const clickedElement = event.target
			const clickedDishId = clickedElement.getAttribute('key')
			if(clickedDishId !== null && clickedDishId !== undefined) {
				dishSearchView.hide()
				dishDetailsView.render(Number(clickedDishId))
				dishDetailsView.show()
			}
		},
		transitionFromMainViewToDishSearch: () => {
			mainView.hide()
			sidebarView.show()
			dishSearchView.show()
		},
		transitionFromPriceSummaryToRecipeSummary: () => {
			priceSummaryView.hide()
			recipeSummaryView.show()
		},
		transitionFromDishSearchToPriceSummary: () => {
			sidebarView.hide()
			dishSearchView.hide()
			dishDetailsView.hide()
	
			statusBarView.show()
			priceSummaryView.show()
			recipeSummaryView.hide()
		},
		transitionFromPriceSummaryToDishSearch: () => {
			statusBarView.hide()
			priceSummaryView.hide()
			recipeSummaryView.hide()
	
			sidebarView.show()
			dishSearchView.show()
			dishDetailsView.hide()
		}
	}

	const mainViewController = createMainViewController(mainView, model, generalStateController)
	const sidebarController = createSidebarController(sidebarView, model, generalStateController)
	const statusBarController = createStatusBarController(statusBarView, model, generalStateController)
	const priceSummaryController = createPriceSummaryController(priceSummaryView, model, generalStateController)
	const dishDetailsController = createDishDetailsController(dishDetailsView, model, generalStateController)
	const dishSearchController = createDishSearchController(dishSearchView, model, generalStateController)

	// Initial state
	mainView.show()
	sidebarView.hide()
	dishSearchView.hide()
	dishDetailsView.hide()
	statusBarView.hide()
	priceSummaryView.hide()
	recipeSummaryView.hide()

})()