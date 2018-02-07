/*
  * Dish Details View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createDishDetailsView = (container, model) => {

  const state = {
    display: false,
  }

  const backFromDishDetailsButton = container.querySelector('#backFromDishDetailsButton')

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
    backFromDishDetailsButton,
    show,
    hide
  })
}