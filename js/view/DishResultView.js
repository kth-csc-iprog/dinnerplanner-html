/*
  * Dish Result View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createDishResultView = (container, model) => {
  
  const dishSearchButton = container.querySelector('#dishSearchButton')
  
  const _dishSearchResultsElement = container.querySelector('#dishSearchResults')

  const render = () => {

    _remove()

    const filter = container.querySelector('#dishSearchField').value
    const type = container.querySelector('#dishTypeSelectField').value

    const createDishResultElement = (imageUrl, name) => {
      const dishResultElement = document.createElement('div')
      dishResultElement.classList.add('dishResult')
  
      const dishResultImageContainerElement = document.createElement('div')
      dishResultImageContainerElement.classList.add('dishResultImageContainer')
  
      const dishResultImageElement = document.createElement('img')
      dishResultImageElement.classList.add('dishResultImage')
      dishResultImageElement.src = imageUrl
  
      const dishResultNameElement = document.createElement('div')
      dishResultNameElement.innerHTML = name
  
      dishResultImageContainerElement.appendChild(dishResultImageElement)
      dishResultElement.appendChild(dishResultImageContainerElement)
      dishResultElement.appendChild(dishResultNameElement)
  
      return dishResultElement;
    }

    model.getAllDishes(type, filter).map(({image, name}) => {
      _dishSearchResultsElement.append(createDishResultElement(`images/${image}`, name))
    })
  }

  const _remove = () => {
    Array.from(_dishSearchResultsElement.childNodes).map(child => child.remove())
  }

  return ({
    dishSearchButton,
    render,
    show,
    hide
  })

}