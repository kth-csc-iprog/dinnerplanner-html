/*
  * Status Bar View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createStatusBarView = (container, model) => {

  const state = {
    display: false
  }

  const backFromMenuSummaryButton = container.querySelector('#backFromMenuSummaryButton')
  
  const numberOfGuests = container.querySelector('#numberOfGuests')

  const _createUpdate = (model) => (changeDetails) => {
    numberOfGuests.innerHTML = model.getNumberOfGuests()
  }
  const update = _createUpdate(model)

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

  model.addObserver(update)
  update()

  return ({
    backFromMenuSummaryButton,
    update,
    show,
    hide
  })
}