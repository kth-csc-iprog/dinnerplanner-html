/*
  * Dish Details View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createDishDetailsView = (container, model) => {

  const state = {
    display: false,
    id: undefined
  }

  const getDishId = () => {
    return state.id
  }

  const _createBackButton = (id) => {
    const backButton = document.createElement('button')
    backButton.setAttribute('id', id)
    backButton.classList.add('backButton')
    backButton.classList.add('primaryButton')
    backButton.innerHTML = 'Back to Search'
    return backButton
  }
  
  const _createAddButton = (id) => {
    const addButton = document.createElement('button')
    addButton.setAttribute('id', id)
    addButton.classList.add('primaryButton')
    addButton.innerHTML = 'Add to menu'
    return addButton
  }

  const backFromDishDetailsButton = _createBackButton('backFromDishDetailsButton')
  const addToMenuButton = _createAddButton('addToMenuButton')

  const _createIngredientsList = (ingredients, totalPrice, numberOfGuests) => {
    const ingredientsListElement = document.createElement('ingredientsList')
    ingredientsListElement.setAttribute('id', 'ingredientsList')

    const ingredientsTitleElement = document.createElement('div')
    ingredientsTitleElement.setAttribute('id', 'ingredientsTitle')
    const titleH3Element = document.createElement('h3')
    titleH3Element.innerHTML = `Ingredients for ${numberOfGuests} people`
    ingredientsTitleElement.appendChild(titleH3Element)

    const ingredientsTableElement = document.createElement('div')
    ingredientsTableElement.setAttribute('id', 'ingredientsTable')
    
    const createIngredientRow = ({ name, quantity, unit, price}) => {

      const ingredientRowElement = document.createElement('div')
      ingredientRowElement.classList.add('ingredientsTableRow')

      const quantityCell = document.createElement('div')
      quantityCell.classList.add('ingredientQuantity')
      quantityCell.innerHTML = `${quantity} ${unit}`
      ingredientRowElement.appendChild(quantityCell)
      
      const nameCell = document.createElement('div')
      nameCell.classList.add('ingredientName')
      nameCell.innerHTML = name
      ingredientRowElement.appendChild(nameCell)
      
      const currencyCell = document.createElement('div')
      currencyCell.classList.add('ingredientCurrency')
      currencyCell.innerHTML = 'SEK'
      ingredientRowElement.appendChild(currencyCell)

      const priceCell = document.createElement('div')
      priceCell.classList.add('ingredientPrice')
      priceCell.innerHTML = `${price}.00`
      ingredientRowElement.appendChild(priceCell)

      return ingredientRowElement
    }
    ingredients.map(ingredient => {
      ingredientsTableElement.appendChild(createIngredientRow(ingredient))
    })
    
    const ingredientsFooterElement = document.createElement('div')
    ingredientsFooterElement.setAttribute('id', 'ingredientsFooter')

    const addToMenuContainer = document.createElement('div')
    addToMenuContainer.setAttribute('id', 'addToMenu')
    addToMenuContainer.classList.add('verticallyCentered')
    addToMenuContainer.appendChild(addToMenuButton)
    ingredientsFooterElement.appendChild(addToMenuContainer)

    const totalCurrencyElement = document.createElement('div')
    totalCurrencyElement.setAttribute('id', 'ingredientsTotalPriceCurrency')
    totalCurrencyElement.innerHTML = 'SEK'
    ingredientsFooterElement.appendChild(totalCurrencyElement)

    const totalPriceElement = document.createElement('div')
    totalPriceElement.setAttribute('id', 'ingredientsTotalPrice')
    totalPriceElement.innerHTML = `${totalPrice}.00`
    ingredientsFooterElement.appendChild(totalPriceElement)
    

    ingredientsListElement.appendChild(ingredientsTitleElement)
    ingredientsListElement.appendChild(ingredientsTableElement)
    ingredientsListElement.appendChild(ingredientsFooterElement)
    return ingredientsListElement
  }

  const render = (id) => {

    _remove()

    state.id = id
    const dish = model.getDish(id)
    const ingredientsList = model.getAllIngredientsForDish(id)
    const numberOfGuests = model.getNumberOfGuests()
    const totalPriceValue = model.getPriceForDish(id)

    const createDishDescription = ({ name, image, description }) => {
      const dishDescriptionElement = document.createElement('div')
      dishDescriptionElement.setAttribute('id', 'dishDescription')

      const dishTitleElement = document.createElement('div')
      dishTitleElement.setAttribute('id', 'dishTitle')
      const titleH2Element = document.createElement('h2')
      titleH2Element.innerHTML = `${name}`
      dishTitleElement.appendChild(titleH2Element)

      const dishImageElement = document.createElement('div')
      dishImageElement.setAttribute('id', 'dishImage')
      const dishImage = document.createElement('img')
      dishImage.src = `images/${image}`
      dishImageElement.appendChild(dishImage)

      const dishDescriptionTextElement = document.createElement('div')
      dishDescriptionTextElement.setAttribute('id', 'dishDescriptionText')
      const dishDescription = document.createElement('p')
      dishDescription.innerHTML = description
      dishDescriptionTextElement.appendChild(dishDescription)

      dishDescriptionElement.appendChild(dishTitleElement)
      dishDescriptionElement.appendChild(dishImageElement)
      dishDescriptionElement.appendChild(dishDescriptionTextElement)
      dishDescriptionElement.appendChild(backFromDishDetailsButton)

      return dishDescriptionElement

    }

    container.appendChild(createDishDescription(dish))
    container.appendChild(_createIngredientsList(ingredientsList, totalPriceValue, numberOfGuests))

    const dishPreparationElement = document.createElement('div')
    dishPreparationElement.setAttribute('id', 'dishPreparation')
    
    const titleH3Element = document.createElement('h3')
    titleH3Element.innerHTML = 'Preparation'
    dishPreparationElement.appendChild(titleH3Element)
    
    const dishPreparationTextElement = document.createElement('div')
    dishPreparationTextElement.setAttribute('id', 'dishPreparationText')
    const dishPreparationText = document.createElement('p')
    dishPreparationText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget aliquet nibh praesent tristique. Quis hendrerit dolor magna eget. In cursus turpis massa tincidunt dui ut ornare. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Dolor sit amet consectetur adipiscing elit. Ac tincidunt vitae semper quis lectus nulla at. Mauris augue neque gravida in fermentum. Egestas diam in arcu cursus euismod quis viverra nibh. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Quis varius quam quisque id. Non odio euismod lacinia at quis risus sed vulputate. Id cursus metus aliquam eleifend mi in. Tortor pretium viverra suspendisse potenti nullam ac tortor.'
    dishPreparationTextElement.appendChild(dishPreparationText)
    
    dishPreparationElement.appendChild(dishPreparationTextElement)

    container.appendChild(dishPreparationElement)
    
  }

  const _remove = () => {
    Array.from(container.childNodes).map(child => child.remove())
  }

  const _createUpdate = (model) => () => {
    if(state.display === true) {
      container.querySelector('#ingredientsList').remove()
      const ingredientsList = model.getAllIngredientsForDish(state.id)
      const totalPriceValue = model.getPriceForDish(state.id)
      const numberOfGuests = model.getNumberOfGuests()
      container.insertBefore(
        _createIngredientsList(ingredientsList, totalPriceValue, numberOfGuests),
        container.children[2]
      )
    }
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
  
  return ({
    getDishId,
    backFromDishDetailsButton,
    addToMenuButton,
    render,
    update,
    show,
    hide
  })
}