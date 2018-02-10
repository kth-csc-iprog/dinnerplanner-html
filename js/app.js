(function () {

	// Curry Functions Tutorial
	// const func2 = (one,two) => {
  //   return one + two
  // }
  // const func = (one, two) => (one + two)

  // const curryFunc = (zero) => (one, two) => (zero + one + two)
  // const curryFunc2 = (zero) => {
  //   return (one, two) => {
  //     return zero + one + two
  //   }
  // }
	
	// Model
	const model = createDinnerModel()
	model.addDishToMenu(1)
	model.addDishToMenu(100)
	model.addDishToMenu(200)

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

	const priceSummaryView = createPriceSummaryView(
		document.getElementById('priceSummary'),
		model
	)

	const recipeSummaryView = createRecipeSummaryView(
		document.getElementById('recipeSummaryView'),
		model
	)

	// General State Controller
	const transitionFromMainViewToDishSearchView = () => {
		mainView.hide()
		sidebarView.show()
		dishSearchView.show()
	}

	const transitionFromDishSearchViewToDishDetailsView = (event) => {
		
		const clickedElement = event.target
		const clickedDishId = clickedElement.getAttribute('key')
		if(clickedDishId !== null && clickedDishId !== undefined) {
			dishSearchView.hide()
			dishDetailsView.render(Number(clickedDishId))
			dishDetailsView.show()
		}
		
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
	dishSearchView.dishSearchResultsElement.onclick = transitionFromDishSearchViewToDishDetailsView

	mainView.show()
	sidebarView.hide()
	dishSearchView.hide()
	dishDetailsView.hide()
	statusBarView.hide()
	priceSummaryView.hide()
	recipeSummaryView.hide()

})()