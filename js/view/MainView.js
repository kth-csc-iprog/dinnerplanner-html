/*
  * Main View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createMainView = (container, model) => {

  const state = {
    display: false,
  }

  const startButton = container.querySelector('#startButton')

  const show = () => {
    if(state.display !== true) {
      state.display = true
    }
    container.style = ''
  }

  const hide = () => {
    if(state.display !== false) {
      state.display = false
    }
    container.style.display = 'none'
  }

  return ({
    startButton,
    show,
    hide
  })
}