const createSidebarController = (view, model) => {

  view.guestNumber.oninput = (event) => {
    const newGuestNumber = event.target.value
    model.setNumberOfGuests(newGuestNumber)
    console.log('Guest number is: ', model.getNumberOfGuests())
  }
  
}