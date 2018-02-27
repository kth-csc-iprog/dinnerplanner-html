const createPriceSummaryController = (view, model, generalStateController) => {

  view.printButton.onclick = generalStateController.transitionFromPriceSummaryToRecipeSummary
}