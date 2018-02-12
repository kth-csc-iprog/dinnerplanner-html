const createDishDetailsController = (view, model, { dishDetailsView, dishSearchView }) => {
  view.addToMenuButton.onclick = () => {
    const dishId = view.getDishId()
    model.addDishToMenu(dishId)
  }

  view.backFromDishDetailsButton.onclick = () => {
		dishDetailsView.hide()
		dishSearchView.show()
	}
}