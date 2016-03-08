// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {
  
  var numberOfGuest = 2;
  var menu   = [];

  var bigOvenKey = 'H9n1zb6es492fj87OxDtZM9s5sb29rW3';
    
  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:bigOvenKey});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:bigOvenKey}); 

  this.setNumberOfGuests = function(num) {
    // If num is an integer
    if (num === parseInt(num,10)) {
      if (num <= 0) {
        numberOfGuest = 0;
      } else {
        numberOfGuest = num;
      }
    };
  }

  this.getNumberOfGuests = function() {
    return numberOfGuest;
  }


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details


  //Returns the dish that is on the menu for selected type 
  this.getSelectedDish = function(type) {
    var dish = null;
    var i = menu.length-1;

    // We iterate over the menu to find if a dish of the same type exist
    for (var i = menu.length - 1; i >= 0; i--) {
      dish = this.getDish(menu[i]);
      if (dish.type === type) {
        return dish;
      };
    }
    return null;
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return menu;
  }

  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function() {
    var allIngredients = [];
    var currentDish = null;

    //Iterate over the menu
    for (key in menu){
      currentDish = this.getDish(menu[key]);

      // For each dish in the menu iterate over the ingredients
      // Two similar ingredients can be in the array if they are in different recipes
      for( i in currentDish.ingredients){
        allIngredients.push(currentDish.ingredients[i]);
      }
    }
    return allIngredients;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {

    //get an array with all of the ingredients in the menu
    var allIngredients = this.getAllIngredients();
    var individualPrice = 0;

    // for each ingredient add the individual price multiply by the quantity to the total price
    for (key in allIngredients) {
      individualPrice += allIngredients[key].price;
    };

    return individualPrice*this.getNumberOfGuests();
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dish) {

      menu.push(dish);

      console.log(menu)

  }

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {

    // We iterate over the menu to find if a dish of the same type exist
    for (var i = menu.length - 1; i >= 0; i--) {
      if (dish.RecipeID == id) {
        menu.splice(i,1);
        return true;

      };
    }

    return false;
  }

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});