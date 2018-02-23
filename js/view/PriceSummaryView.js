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

  const _appetizerContainer = container.querySelector('#appetizer')
  const _mainCourseContainer = container.querySelector('#mainCourse')
  const _sideDishContainer = container.querySelector('#sideDish')
  const _dessertContainer = container.querySelector('#dessert')
  const _saladContainer = container.querySelector('#salad')
  const _breadContainer = container.querySelector('#bread')
  const _breakfastContainer = container.querySelector('#breakfast')
  const _soupContainer = container.querySelector('#soup')
  const _beverageContainer = container.querySelector('#beverage')
  const _sauceContainer = container.querySelector('#sauce')
  const _drinkContainer = container.querySelector('#drink')
  const _totalPrice = container.querySelector('#totalPriceValue')

  const _createUpdate = model => changeDetails => {
    _remove()

    const menu = {
      'appetizer': model.getSelectedDish('appetizer'),
      'mainCourse': model.getSelectedDish('main course'),
      'sideDish': model.getSelectedDish('side dish'),
      'dessert': model.getSelectedDish('dessert'),
      'salad': model.getSelectedDish('salad'),
      'bread': model.getSelectedDish('bread'),
      'breakfast': model.getSelectedDish('breakfast'),
      'soup': model.getSelectedDish('soup'),
      'beverage': model.getSelectedDish('beverage'),
      'sauce': model.getSelectedDish('sauce'),
      'drink': model.getSelectedDish('drink')
    }

    Object.keys(menu).map(type => {
      const dish = menu[type]
      if(dish !== undefined) {
        dish.price = model.getPriceForDish(dish)
      }
    })

    const totalPriceValue = model.getTotalMenuPrice()

    const createDishElement = ({image, title, pricePerServing}) => {
      const dishElement = document.createElement('div')
      dishElement.classList.add('dishItemContainer')

      const dishImageContainerElement = document.createElement('div')
      dishImageContainerElement.classList.add('verticallyCentered')
      dishImageContainerElement.classList.add('dishImage')
      const dishImageElement = document.createElement('img')
      dishImageElement.src = image
      dishImageContainerElement.appendChild(dishImageElement)

      const dishNameElement = document.createElement('p')
      dishNameElement.classList.add('dishName')
      dishNameElement.innerHTML = title

      const dishPriceElement = document.createElement('p')
      dishPriceElement.classList.add('dishPrice')
      dishPriceElement.innerHTML = `${pricePerServing} SEK`

      dishElement.appendChild(dishImageContainerElement)
      dishElement.appendChild(dishNameElement)
      dishElement.appendChild(dishPriceElement)

      return dishElement
    }

    Object.keys(menu).map(type => {
      const dish = menu[type]
      if(dish !== undefined) {
        switch (type) {
          case 'appetizer':
            _appetizerContainer.append(createDishElement(dish))
            break;
          case 'mainCourse':
            _mainCourseContainer.append(createDishElement(dish))
            break;
          case 'sideDish':
            _sideDishContainer.append(createDishElement(dish))
            break;
          case 'dessert':
            _dessertContainer.append(createDishElement(dish))
            break;
          case 'salad':
            _saladContainer.append(createDishElement(dish))
            break;
          case 'bread':
            _breadContainer.append(createDishElement(dish))
            break;
          case 'breakfast':
            _breakfastContainer.append(createDishElement(dish))
            break;
          case 'soup':
            _soupContainer.append(createDishElement(dish))
            break;
          case 'beverage':
            _beverageContainer.append(createDishElement(dish))
            break;
          case 'sauce':
            _sauceContainer.append(createDishElement(dish))
            break;
          case 'drink':
            _drinkContainer.append(createDishElement(dish))
            break;
        }
      }
    })

    _totalPrice.innerHTML = `${totalPriceValue}.00`
  }
  const update = _createUpdate(model)

  const _remove = () => {
    const childNodesToRemove = Array.from([])
                                .concat(Array.from(_appetizerContainer.childNodes))
                                .concat(Array.from(_mainCourseContainer.childNodes))
                                .concat(Array.from(_sideDishContainer.childNodes))
                                .concat(Array.from(_dessertContainer.childNodes))
                                .concat(Array.from(_saladContainer.childNodes))
                                .concat(Array.from(_breadContainer.childNodes))
                                .concat(Array.from(_breakfastContainer.childNodes))
                                .concat(Array.from(_soupContainer.childNodes))
                                .concat(Array.from(_beverageContainer.childNodes))
                                .concat(Array.from(_sauceContainer.childNodes))
                                .concat(Array.from(_drinkContainer.childNodes))
    childNodesToRemove.map(child => child.remove())
    _totalPrice.innerHTML = "0.00"
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
    printButton,
    update,
    show,
    hide
  })
}
