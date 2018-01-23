const mainViewElement = document.getElementById('mainView')
const appViewElement = document.getElementById('appView')
const dishSearchElement = document.getElementById('dishSearchView')
const dishDetailsElement = document.getElementById('dishDetailsView')
const menuSummaryElement = document.getElementById('menuSummaryView')
const priceSummaryElement = document.getElementById('priceSummary')
const recipeSummaryElement = document.getElementById('recipeSummaryView')

appViewElement.style.display = 'none'
dishSearchElement.style.display = 'none'
dishDetailsElement.style.display = 'none'
menuSummaryElement.style.display = 'none'
priceSummaryElement.style.display = 'none'
recipeSummaryElement.style.display = 'none'

const transitionFromMainViewToDishSearchView = () => {
  mainViewElement.style.display = 'none'
  appViewElement.style = ''
  dishSearchElement.style = ''
}

const transitionFromDishSearchViewToPriceSummaryView = () => {
  appViewElement.style.display = 'none'
  dishSearchElement.style.display = 'none'
  menuSummaryElement.style = ''
  priceSummaryElement.style = ''
}

const transitionFromPriceSummaryViewToDishSearchView = () => {
  menuSummaryElement.style.display = 'none'
  appViewElement.style = ''
  dishSearchElement.style = ''
}

const transitionFromPriceSummaryViewToRecipeSummaryView = () => {
  priceSummaryElement.style.display = 'none'
  recipeSummaryElement.style = ''
}