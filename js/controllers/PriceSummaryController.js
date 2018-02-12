const createPriceSummaryController = (view, model, { priceSummaryView, recipeSummaryView }) => {

  view.printButton.onclick = () => {
		priceSummaryView.hide()
		recipeSummaryView.show()
	}
}