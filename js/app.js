(function () {
	//We instantiate our model
	const model = createDinnerModel()

	// Create the instances of the Views
	const sidebarView = createSidebarView(
		document.getElementById('sidebar'),
		model
	)

	const welcomeView = createWelcomeView(
		document.getElementById('mainView'),
		model
	)

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

})()