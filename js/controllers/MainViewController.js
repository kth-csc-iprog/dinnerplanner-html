const createMainViewController = (view, model, generalStateController) => {

  view.startButton.onclick = generalStateController.transitionFromMainViewToDishSearch
}