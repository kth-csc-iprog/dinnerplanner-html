/*
  * Sidebar View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createSidebarView = (container, model) => {

  const state = {
    display: false,
    numberOfGuests: undefined,
    menu: undefined,
    totalMenuPrice: undefined
  }

  const guestNumber = container.querySelector('#guestNumber')
  const confirmMenuButton = container.querySelector('#confirmMenuButton')
  const _menuTableContent = container.querySelector('#tableContent')
  const _totalPrice = container.querySelector('#totalPriceValue')

  const _createUpdate = (model) => (changeDetails) => {
    state.numberOfGuests = model.getNumberOfGuests()
    state.menu = model.getFullMenu().map(item => {
      item.price = model.getPriceForDish(item.id)
      return item
    })
    state.totalMenuPrice = model.getTotalMenuPrice()

    _remove()
    _render()
  }
  const update = _createUpdate(model)

  const _render = () => {
    guestNumber.value = state.numberOfGuests

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

    state.menu.map(item =>
      _menuTableContent.appendChild(createNewRow(item.title, item.pricePerServing))
    )

    _totalPrice.innerHTML = `${state.totalMenuPrice}.00`

  }

  const _remove = () => {
    Array.from(_menuTableContent.childNodes).map(child => child.remove())
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

  model.addObserver(update)
  update()

  return ({
    guestNumber,
    confirmMenuButton,
    update,
    show,
    hide
  })
}
