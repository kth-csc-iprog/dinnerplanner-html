const createDishSearchController = (view, model, { dishSearchView, dishDetailsView }) => {
  view.dishSearchButton.onclick = view.render

  view.dishSearchResultsElement.onclick = (event) => {
		const clickedElement = event.target
		const clickedDishId = clickedElement.getAttribute('key')
		if(clickedDishId !== null && clickedDishId !== undefined) {
			dishSearchView.hide()
			dishDetailsView.render(Number(clickedDishId))
			dishDetailsView.show()
		}
	}
}