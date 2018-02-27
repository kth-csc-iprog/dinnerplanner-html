const createDishDetailsController = (view, model, generalStateController) => {
  view.addToMenuButton.onclick = () => {
    const dishId = view.getDishId()
    model.addDishToMenu(dishId)
  }

  view.backFromDishDetailsButton.onclick = 
    generalStateController.transitionFromDishDetailsToDishSearch
}