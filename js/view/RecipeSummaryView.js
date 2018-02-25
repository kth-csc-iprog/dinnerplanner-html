/*
  * Recipe Summary View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createRecipeSummaryView = (container, model) => {

  const state = {
    display: false
  }

  const _createUpdate = (model) => (changeDetails) => {
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

    const createRecipeElement = ({title, image, description, sourceUrl, instructions}) => {

      const recipeElement = document.createElement('div')
      recipeElement.classList.add('recipe')

      const recipeImageContainerElement = document.createElement('div')
      recipeImageContainerElement.classList.add('recipeImage')

      const recipeImageElement = document.createElement('img')
      recipeImageElement.src = image
      recipeImageContainerElement.appendChild(recipeImageElement)

      const recipeTextboxElement = document.createElement('div')
      recipeTextboxElement.classList.add('recipeTextbox')

      const recipeNameElement = document.createElement('h2')
      recipeNameElement.classList.add('recipeName')
      recipeNameElement.innerHTML = `${title}`

      const recipeDescriptionElement = document.createElement('p')
      recipeDescriptionElement.classList.add('recipeDescriptionText')
      const recipeDescription = document.createElement('a')
      recipeDescription.href = sourceUrl
      recipeDescription.target = "_blank"
      recipeDescription.innerHTML = "See description on original website"
      recipeDescriptionElement.appendChild(recipeDescription)

      recipeTextboxElement.appendChild(recipeNameElement)
      recipeTextboxElement.appendChild(recipeDescriptionElement)

      const preparationTextboxElement = document.createElement('div')
      preparationTextboxElement.classList.add('recipeTextbox')

      const preparationTitleElement = document.createElement('h3')
      preparationTitleElement.innerHTML = 'Preparation'

      const preparationDescriptionElement = document.createElement('p')
      preparationDescriptionElement.classList.add('recipePreparationText')
      preparationDescriptionElement.innerHTML = instructions

      preparationTextboxElement.appendChild(preparationTitleElement)
      preparationTextboxElement.appendChild(preparationDescriptionElement)

      recipeElement.appendChild(recipeImageContainerElement)
      recipeElement.appendChild(recipeTextboxElement)
      recipeElement.appendChild(preparationTextboxElement)

      return recipeElement
    }

    Object.keys(menu).map(type => {
      const dish = menu[type]
      if(dish !== undefined) {
        container.append(createRecipeElement(dish))
      }
    })
  }
  const update = _createUpdate(model)

  const _remove = () => {
    Array.from(container.childNodes).map(child => child.remove())
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
    update,
    show,
    hide
  })
}
