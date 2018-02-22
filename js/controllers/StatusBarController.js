const createStatusBarController = (view, model, {
  statusBarView, priceSummaryView, recipeSummaryView, sidebarView, dishSearchView, dishDetailsView
}) => {

  view.backFromMenuSummaryButton.onclick = () => {
		statusBarView.hide()
		priceSummaryView.hide()
		recipeSummaryView.hide()

		sidebarView.show()
		dishSearchView.show()
		dishDetailsView.hide()
	}

}
