const createDishSearchController = (view, model, generalStateController) => {
  view.dishSearchButton.onclick = view.render

	view.dishSearchResultsElement.onclick = 
		generalStateController.transitionFromDishSearchToDishDetails
}