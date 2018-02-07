/*
  * Price Summary View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createPriceSummaryView = (container, model) => {
  
  const state = {
    display: false
  }

  const printButton = container.querySelector('#printButton')

  const _starterContainer = container.querySelector('#starter')
  const _mainCourseContainer = container.querySelector('#mainCourse')
  const _dessertContainer = container.querySelector('#dessert')
  const _dishPriceValue = container.querySelector('#dishPriceValue')

  const _createUpdate = (model) => (changeDetails) => {
    
  }

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
    printButton,
    show,
    hide
  })
}