const createSidebarController = (view, model) => {

  view.guestNumber.oninput = (event) => {
    const newGuestNumber = event.target.value
    model.setNumberOfGuests(newGuestNumber)
  }
  
}