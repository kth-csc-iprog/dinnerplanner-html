/*
  * Status Bar View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createStatusBarView = (container, model) => {
  container.querySelector('#numberOfGuests').innerHTML = model.getNumberOfGuests()
}