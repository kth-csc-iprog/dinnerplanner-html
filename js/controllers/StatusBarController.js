const createStatusBarController = (view, model, generalStateController) => {

	view.backFromMenuSummaryButton.onclick =
		generalStateController.transitionFromPriceSummaryToDishSearch

}
