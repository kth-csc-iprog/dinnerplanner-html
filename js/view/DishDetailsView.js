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

    const createIngredientRow = ({ name, quantity, unit }) => {

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

  const render = id => {

    _remove()

    state.id = id

    // loading state
    const loadingAlert = document.querySelector('#alert-notice')
    loadingAlert.style.display = "block"
    loadingAlert.innerHTML = "Loading dish details ..."

    model.getDish(id).then(dish => {
      loadingAlert.style.display = "none"
      loadingAlert.innerHTML = ""

      const ingredientsList = model.getAllIngredientsForDish(dish)
      const numberOfGuests = model.getNumberOfGuests()
      const totalPriceValue = model.getPriceForDish(dish)

      const createDishDescription = ({ title, image, sourceUrl }) => {
        const dishDescriptionElement = document.createElement('div')
        dishDescriptionElement.setAttribute('id', 'dishDescription')

        const dishTitleElement = document.createElement('div')
        dishTitleElement.setAttribute('id', 'dishTitle')
        const titleH2Element = document.createElement('h2')
        titleH2Element.innerHTML = `${title}`
        dishTitleElement.appendChild(titleH2Element)

        const dishImageElement = document.createElement('div')
        dishImageElement.setAttribute('id', 'dishImage')
        const dishImage = document.createElement('img')
        dishImage.src = image
        dishImageElement.appendChild(dishImage)

        const dishDescriptionTextElement = document.createElement('div')
        dishDescriptionTextElement.setAttribute('id', 'dishDescriptionText')
        const dishDescription = document.createElement('a')
        dishDescription.href = sourceUrl
        dishDescription.target = "_blank"
        dishDescription.innerHTML = "See description on original website"
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
      dishPreparationText.innerHTML = dish.instructions
      dishPreparationTextElement.appendChild(dishPreparationText)

      dishPreparationElement.appendChild(dishPreparationTextElement)

      container.appendChild(dishPreparationElement)
    }).catch(error => {
      loadingAlert.innerHTML = error;
    });
  }

  const _remove = () => {
    Array.from(container.childNodes).map(child => child.remove())
  }

  const _createUpdate = (model) => () => {
    if(state.display === true) {
      model.getDish(state.id).then(dish => {
        container.querySelector('#ingredientsList').remove()
        const ingredientsList = model.getAllIngredientsForDish(dish)
        const totalPriceValue = model.getPriceForDish(dish)
        const numberOfGuests = model.getNumberOfGuests()

        container.insertBefore(
          _createIngredientsList(ingredientsList, totalPriceValue, numberOfGuests),
          container.children[2]
        )
      });
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
