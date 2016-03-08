// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {
  
  var numberOfGuest = 0;

  // Array of dishes so we won't have to make an API call every time
  var menu   = [];

  // Array of ID to store in the cookie
  var menuID   = [];

  var bigOvenKey = 'sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox';
    
  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:bigOvenKey});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:bigOvenKey}); 



  cookieGuest = $cookieStore.get('numberOfGuest');
  if (cookieGuest !== undefined) {numberOfGuest = cookieGuest;}

  var cookieMenu = $cookieStore.get('menuID');


  //Get the dishes from the array of id stored in the cookies
  this.getDishFromCookie = function myself(i){
    if (i <= cookieMenu.length - 1) {

      var totalPrice = 0;
      
      $resource('http://api.bigoven.com/recipe/:id',{api_key:bigOvenKey}).get({id:cookieMenu[i]},

        function(data){
        
        console.log(data);

        //Calculate the price per person and add it to the dish object
        for (var j = data.Ingredients.length - 1; j >= 0; j--) {
          totalPrice += data.Ingredients[j].Quantity;
        }

        data.Price = totalPrice; 

        menu.push(data);

        i++;
        myself(i);

      },function(data){
        console.log("fail")
      });
    }
    
  }



  //If the array of ID exist we get the dish associated with each one
  if (cookieMenu !== undefined) {
    menuID = cookieMenu;
    this.getDishFromCookie(0);
  };

  this.setNumberOfGuests = function(num) {
    // If num is an integer
    if (num === parseInt(num,10)) {
      if (num <= 0) {
        numberOfGuest = 0;
      } else {
        numberOfGuest = num;
      }
    };

    $cookieStore.put('numberOfGuest',numberOfGuest)

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
      menuID.push(dish.RecipeID);
      $cookieStore.put('menuID',menuID);
      console.log($cookieStore.get('menuID'));
  }

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {

    // We iterate over the menu to find if a dish of the same type exist
    for (var i = menu.length - 1; i >= 0; i--) {
      if (menu[i].RecipeID === id) {
        menu.splice(i,1);
        menuID.splice(i,1);
        $cookieStore.put('menuID',menuID);

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