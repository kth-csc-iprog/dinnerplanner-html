/*
  * Dish Search View Object factory function

  * @param {HTML DOM element} container - references the HTML parent element that contains the view.
  * @param {Object} model - the reference to the Dinner Model
*/

const createDishSearchView = (container, model) => {
  
  const dishSearchResultsElement = container.querySelector('#dishSearchResults')

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

  model.getAllDishes('all').map(({image, name}) => {
    dishSearchResultsElement.appendChild(createDishResultElement(`images/${image}`, name))
  })


}