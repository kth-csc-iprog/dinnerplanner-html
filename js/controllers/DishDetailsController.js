const createDishDetailsController = (view, model) => {
  view.addToMenuButton.onclick = () => {
    const dishId = view.getDishId()
    model.addDishToMenu(dishId)
  }
}