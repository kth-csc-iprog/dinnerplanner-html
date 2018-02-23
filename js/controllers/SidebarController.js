const createSidebarController = (view, model, generalStateController) => {

  view.guestNumber.oninput = (event) => {
    const newGuestNumber = event.target.value
    model.setNumberOfGuests(newGuestNumber)
  }

  view.confirmMenuButton.onclick = generalStateController.transitionFromDishSearchToPriceSummary
  
}