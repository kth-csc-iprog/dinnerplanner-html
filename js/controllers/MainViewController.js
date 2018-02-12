const createMainViewController = (view, model, { sidebarView, dishSearchView }) => {

  view.startButton.onclick = () => {
    view.hide()
    sidebarView.show()
    dishSearchView.show()
  }
}