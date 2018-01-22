/*
  * Sidebar View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createSidebarView = (container, model) => {

  const guestNumber = container.querySelector('#guestNumber')
  guestNumber.value = model.getNumberOfGuests()
  guestNumber.onchange = (event) => {
    const newGuestNumber = event.target.value
    model.setNumberOfGuests(newGuestNumber)
  }

  const menuTableContent = container.querySelector('#tableContent')

  const createNewRow = (name, cost) => {

    const tableRow = document.createElement('div')
    tableRow.classList.add('tableRow')

    const rowName = document.createElement('div')
    rowName.classList.add('rowName')
    rowName.innerHTML = `${name}`
    
    const rowCost = document.createElement('div')
    rowCost.classList.add('rowCost')
    rowCost.innerHTML = `${cost}:-`

    tableRow.appendChild(rowName)
    tableRow.appendChild(rowCost)

    return tableRow
  }

  model.addDishToMenu(1)
  model.getFullMenu().map(item => {
    menuTableContent.appendChild(createNewRow(item.name, model.getPriceForDish(item.id)))
  })
}