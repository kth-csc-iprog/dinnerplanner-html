//DinnerModel class
class DinnerModel {

  constructor() {
    //TODO Lab 1
    // implement the data structure that will hold number of guests
    // and selected dishes for the dinner menu

  }

  setNumberOfGuests(num) {
    //TODO Lab 1
  }

  getNumberOfGuests() {
    //TODO Lab 1
  }

  //Returns the dishes that are on the menu for selected type
  getSelectedDishes(type) {
    //TODO Lab 1
  }

  //Returns all the dishes on the menu.
  getFullMenu() {
    //TODO Lab 1
  }

  //Returns all ingredients for all the dishes on the menu.
  getAllIngredients() {
    //TODO Lab 1
  }

  //Returns the total price of the menu (price per serving of each dish multiplied by number of guests).
  getTotalMenuPrice() {
    //TODO Lab 1
  }

  //Adds the passed dish to the menu.
  addDishToMenu(dish) {
    //TODO Lab 1
  }

  //Removes dish with specified id from menu
  removeDishFromMenu(id) {
    //TODO Lab 1
  }

  //Returns all dishes of specific type (i.e. "starter", "main dish" or "dessert").
  //query argument, text, if passed only returns dishes that contain the query in name or one of the ingredients.
  //if you don't pass any query, all the dishes will be returned
  getAllDishes(type, query) {
    return this.dishes.filter(function (dish) {
      let found = true;
      if (query) {
        found = false;
        dish.extendedIngredients.forEach(function (ingredient) {
          if (ingredient.name.indexOf(query) !== -1) {
            found = true;
          }
        });
        if (dish.name.indexOf(query) !== -1) {
          found = true;
        }
      }
      return (dish.dishTypes.includes(type) || !type) && found;
    });
  }

  //Returns a dish of specific ID
  getDish(id) {
    for (let dish of this.dishes) {
      if (dish.id === id) {
        return dish;
      }
    }
    return undefined;
  }
}

