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
      'starter': model.getSelectedDish('starter'),
      'mainCourse': model.getSelectedDish('main dish'),
      'dessert': model.getSelectedDish('dessert')
    }

    const createRecipeElement = ({name, image, description}) => {

      const recipeElement = document.createElement('div')
      recipeElement.classList.add('recipe')

      const recipeImageContainerElement = document.createElement('div')
      recipeImageContainerElement.classList.add('recipeImage')

      const recipeImageElement = document.createElement('img')
      recipeImageElement.src = `images/${image}`
      recipeImageContainerElement.appendChild(recipeImageElement)

      const recipeTextboxElement = document.createElement('div')
      recipeTextboxElement.classList.add('recipeTextbox')
      
      const recipeNameElement = document.createElement('h2')
      recipeNameElement.classList.add('recipeName')
      recipeNameElement.innerHTML = `${name}`
      
      const recipeDescriptionElement = document.createElement('p')
      recipeDescriptionElement.classList.add('recipeDescriptionText')
      recipeDescriptionElement.innerHTML = `${description}`

      recipeTextboxElement.appendChild(recipeNameElement)
      recipeTextboxElement.appendChild(recipeDescriptionElement)

      const preparationTextboxElement = document.createElement('div')
      preparationTextboxElement.classList.add('recipeTextbox')
      
      const preparationTitleElement = document.createElement('h3')
      preparationTitleElement.innerHTML = 'Preparation'
      
      const preparationDescriptionElement = document.createElement('p')
      preparationDescriptionElement.classList.add('recipePreparationText')
      preparationDescriptionElement.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget aliquet nibh praesent tristique. Quis hendrerit dolor magna eget. In cursus turpis massa tincidunt dui ut ornare. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Dolor sit amet consectetur adipiscing elit. Ac tincidunt vitae semper quis lectus nulla at. Mauris augue neque gravida in fermentum. Egestas diam in arcu cursus euismod quis viverra nibh. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Quis varius quam quisque id. Non odio euismod lacinia at quis risus sed vulputate. Id cursus metus aliquam eleifend mi in. Tortor pretium viverra suspendisse potenti nullam ac tortor.`

      preparationTextboxElement.appendChild(preparationTitleElement)
      preparationTextboxElement.appendChild(preparationDescriptionElement)
      
      recipeElement.appendChild(recipeImageContainerElement)
      recipeElement.appendChild(recipeTextboxElement)
      recipeElement.appendChild(preparationTextboxElement)

      return recipeElement
    }

    Object.keys(menu).map(type => {
      const dish = menu[type]
      container.append(createRecipeElement(dish))
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