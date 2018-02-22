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

    const createDishResultElement = ({ image, name, id}) => {

      const dishResultElement = document.createElement('div')
      dishResultElement.classList.add('dishResult')
      dishResultElement.setAttribute('key', id)

      const dishResultImageContainerElement = document.createElement('div')
      dishResultImageContainerElement.classList.add('dishResultImageContainer')
      dishResultImageContainerElement.setAttribute('key', id)

      const dishResultImageElement = document.createElement('img')
      dishResultImageElement.classList.add('dishResultImage')
      dishResultImageElement.src = `images/${image}`
      dishResultImageElement.setAttribute('key', id)

      const dishResultNameElement = document.createElement('div')
      dishResultNameElement.innerHTML = name
      dishResultNameElement.setAttribute('key', id)

      dishResultImageContainerElement.appendChild(dishResultImageElement)
      dishResultElement.appendChild(dishResultImageContainerElement)
      dishResultElement.appendChild(dishResultNameElement)

      return dishResultElement
    }

    model.getAllDishes(type, filter).then(dishes => {
      dishes.map(dish => {
        dishSearchResultsElement.append(createDishResultElement(dish))
      })
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
