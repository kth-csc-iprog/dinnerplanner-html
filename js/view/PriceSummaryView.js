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
  const _totalPrice = container.querySelector('#totalPriceValue')

  const _createUpdate = (model) => (changeDetails) => {
    _remove()

    const menu = {
      'starter': model.getSelectedDish('starter'),
      'mainCourse': model.getSelectedDish('main dish'),
      'dessert': model.getSelectedDish('dessert')
    }

    Object.keys(menu).map(type => {
      const dish = menu[type]
      if(dish !== undefined) {
        dish.price = model.getPriceForDish(dish.id)
      }
    })

    const totalPriceValue = model.getTotalMenuPrice()

    const createDishElement = ({image, name, price}) => {
      const dishElement = document.createElement('div')
      dishElement.classList.add('dishItemContainer')
  
      const dishImageContainerElement = document.createElement('div')
      dishImageContainerElement.classList.add('verticallyCentered')
      dishImageContainerElement.classList.add('dishImage')
      const dishImageElement = document.createElement('img')
      dishImageElement.src = `images/${image}`
      dishImageContainerElement.appendChild(dishImageElement)
  
      const dishNameElement = document.createElement('p')
      dishNameElement.classList.add('dishName')
      dishNameElement.innerHTML = name

      const dishPriceElement = document.createElement('p')
      dishPriceElement.classList.add('dishPrice')
      dishPriceElement.innerHTML = `${price} SEK`
      
      dishElement.appendChild(dishImageContainerElement)
      dishElement.appendChild(dishNameElement)
      dishElement.appendChild(dishPriceElement)
  
      return dishElement
    }

    Object.keys(menu).map(type => {
      const dish = menu[type]
      if(dish !== undefined) {
        switch (type) {
          case 'starter':
            _starterContainer.append(createDishElement(dish))
            break;
          case 'mainCourse':
            _mainCourseContainer.append(createDishElement(dish))
            break;
          case 'dessert':
            _dessertContainer.append(createDishElement(dish))
            break;
        }
      }
    })

    _totalPrice.innerHTML = `${totalPriceValue}.00`
  }
  const update = _createUpdate(model)

  const _remove = () => {
    const childNodesToRemove = Array.from(_starterContainer.childNodes)
                                .concat(Array.from(_mainCourseContainer.childNodes))
                                .concat(Array.from(_dessertContainer.childNodes))
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