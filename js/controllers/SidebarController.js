const createSidebarController = (view, model, { 
  sidebarView, dishSearchView, dishDetailsView, statusBarView, priceSummaryView, recipeSummaryView
}) => {

  view.guestNumber.oninput = (event) => {
    const newGuestNumber = event.target.value
    model.setNumberOfGuests(newGuestNumber)
  }

  view.confirmMenuButton.onclick = () => {
		sidebarView.hide()
		dishSearchView.hide()
		dishDetailsView.hide()

		statusBarView.show()
		priceSummaryView.show()
		recipeSummaryView.hide()
	}

}
