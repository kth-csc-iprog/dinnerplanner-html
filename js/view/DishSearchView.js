/*
  * Dish Search View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createDishSearchView = (container, model) => {

  const state = {
    display: false,
  }

  const dishSearchButton = container.querySelector('#dishSearchButton')
  const dishSearchResultsElement = container.querySelector('#dishSearchResults')

  const render = () => {

    _remove()

    const filter = container.querySelector('#dishSearchField').value
    const type = container.querySelector('#dishTypeSelectField').value

    const createDishResultElement = ({ image, title: name, id }) => {
      const dishResultElement = document.createElement('div')
      dishResultElement.classList.add('dishResult')
      dishResultElement.setAttribute('key', id)

      const dishResultImageContainerElement = document.createElement('div')
      dishResultImageContainerElement.classList.add('dishResultImageContainer')
      dishResultImageContainerElement.setAttribute('key', id)

      const dishResultImageElement = document.createElement('img')
      dishResultImageElement.classList.add('dishResultImage')
      dishResultImageElement.src = `https://spoonacular.com/recipeImages/${image}`
      dishResultImageElement.setAttribute('key', id)

      const dishResultNameElement = document.createElement('div')
      dishResultNameElement.innerHTML = name
      dishResultNameElement.setAttribute('key', id)

      dishResultImageContainerElement.appendChild(dishResultImageElement)
      dishResultElement.appendChild(dishResultImageContainerElement)
      dishResultElement.appendChild(dishResultNameElement)

      return dishResultElement
    }


    const loadingAlert = document.querySelector('#alert-notice')
    loadingAlert.style.display = "block"
    loadingAlert.innerHTML = "Loading search results ..."

    model.getAllDishes(type, filter).then(dishes => {
      loadingAlert.style.display = "none"
      loadingAlert.innerHTML = ""

      if (dishes.length === 0) {
        dishSearchResultsElement.innerHTML = `Sorry, no search results were found for '${filter}'.`;
        return;
      }

      console.log(dishes)
      dishes.map(dish => {
        dishSearchResultsElement.append(createDishResultElement(dish))
      })
    })
    .catch(error => {
      loadingAlert.innerHTML = `There was a problem with loading the dishes. ${error}`;
    });
  }

  const _remove = () => {
    Array.from(dishSearchResultsElement.childNodes).map(child => child.remove())
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

  render()

  return ({
    dishSearchButton,
    dishSearchResultsElement,
    render,
    show,
    hide
  })

}
