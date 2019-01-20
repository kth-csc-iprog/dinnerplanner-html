// DinnerModel Object constructor
var DinnerModel = function() {

  // TODO Lab 1 implement the data structure that will hold number of guest
  // and selected dishes for the dinner menu

  // For test purposes
  this.numberOfGuests = 2; // should be changed to 0

  this.setNumberOfGuests = function(num) {
    this.numberOfGuests = num;
  }

  this.getNumberOfGuests = function() {
    return this.numberOfGuests;
  }

  // For test purposes
  this.selectedDishes = [{ // should be changed to []
    'id':3,
    'name':'Baked Brie with Peaches',
    'type':'starter',
    'image':'bakedbrie.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'round Brie cheese',
      'quantity':10,
      'unit':'g',
      'price':8
    },{
      'name':'raspberry preserves',
      'quantity':15,
      'unit':'g',
      'price':10
    },{
      'name':'peaches',
      'quantity':1,
      'unit':'',
      'price':4
    }]
  },{
    'id':101,
    'name':'MD 2',
    'type':'main dish',
    'image':'bakedbrie.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'ingredient 1',
      'quantity':1,
      'unit':'pieces',
      'price':8
    },{
      'name':'ingredient 2',
      'quantity':15,
      'unit':'g',
      'price':7
    },{
      'name':'ingredient 3',
      'quantity':10,
      'unit':'ml',
      'price':4
    }]
  },{
    'id':200,
    'name':'Chocolat Ice cream',
    'type':'dessert',
    'image':'icecream.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'ice cream',
      'quantity':100,
      'unit':'ml',
      'price':6
    }]
  }]

  // Returns the dish that is(/are) on the (selected) menu for type
  this.getSelectedDish = function(type) {
    var dishType;
    this.selectedDishes.forEach(function(dish) {
      if (dish["type"] === type) {
        dishType = dish;
      }
    });
    return dishType;
  }

  // Returns all the dishes on the (selected) menu.
  this.getFullMenu = function() {
    return this.selectedDishes;
  }

  // Returns all types of dishes
  this.getDishesTypes = function() {
    dishesTypes = [];

    dishes.forEach(function(dish) {
       dishesTypes.push(dish["type"]);
    });

    return [...new Set(dishesTypes)];
  }

  // Returns all ingredients for all the dishes on the (selected) menu.
  this.getAllIngredients = function() {
    var ingredients = [];

    this.selectedDishes.forEach(function(dish) {
      dish["ingredients"].forEach(function(ingredient) {
        ingredients.push(ingredient);
      });
    });

    return ingredients;
  }

  // Returns the price of the selected dish
  // multiplied by the number of guests
  this.getDishPrice = function(dish) {
    var dishPrice = 0;

    dish["ingredients"].forEach(function(ingredient) {
      dishPrice += ingredient["price"];
    });

    return dishPrice * this.getNumberOfGuests();
  }

  // Returns the total price of the (selected) menu (all the ingredients
  // multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var totalPrice = 0;

    this.selectedDishes.forEach(function(dish) {
      dish["ingredients"].forEach(function(ingredient) {
        totalPrice += ingredient["price"];
      });
    });

    return totalPrice * this.getNumberOfGuests();
  }

  // Adds the passed dish to the (selected) menu. If the dish of that type
  // already exists on the (selected) menu it is removed from the (selected)
  // menu and the new one is added.
  this.addDishToMenu = function(id) {
    var dishToAdd;
    dishes.forEach(function(dish) {
      if (dish["id"] === id) {
        dishToAdd = dish;
      }
    });

    var dishAlreadyInMenu = false;
    for (var i=0; i<this.selectedDishes.length; i++) {
      if(this.selectedDishes[i].type===this.getDish(id).type){
        dishAlreadyInMenu = true;
        this.selectedDishes.splice(i, 1);
        this.selectedDishes.push(dishToAdd);
      }

    };

    if (dishAlreadyInMenu === false) {
      this.selectedDishes.push(dishToAdd);
    }
  }

  // Removes dish from (selected) menu
  this.removeDishFromMenu = function(id) {
    for (var i=0; i<this.selectedDishes.length; i++) {
      if (this.selectedDishes[i]["id"] === id) {
        this.selectedDishes.splice(i, 1);
      }
    }
  }

  // Function that returns all dishes of specific type (i.e. "starter",
  // "main dish" or "dessert"). You can use the filter argument to filter out
  // the dish by name or ingredient (use for search). If you don't pass any
  // filter all the dishes of the specified type will be returned. If you
  // don't pass any type, all the dishes will be returned.
  this.getAllDishes = function (type, filter) {
    return dishes.filter(function(dish) {
      if (type) {
        var found = true;
        if (filter) {
          found = false;
          dish.ingredients.forEach(function(ingredient) {
            if (ingredient.name.indexOf(filter)!=-1) {
              found = true;
            }
          });

          if (dish.name.indexOf(filter) != -1) {
            found = true;
          }
        }

        return dish.type == type && found;
      }

      return dishes;
    });
  }

  // Function that returns a dish of specific ID
  this.getDish = function (id) {
    for(key in dishes){
      if(dishes[key].id == id) {
        return dishes[key];
      }
    }
  }

  // Welcome text
  this.welcomeText = "\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  \
          aliquip ex ea commodo consequat."

  // the dishes variable contains an array of all the
  // dishes in the database. Each dish has id, name, type,
  // image (name of the image file), description and
  // array of ingredients. Each ingredient has name,
  // quantity (a number), price (a number) and unit (string
  // defining the unit i.e. "g", "slices", "ml". Unit
  // can sometimes be empty like in the example of eggs where
  // you just say "5 eggs" and not "5 pieces of eggs" or anything else.

  var dishes = [{
    'id':1,
    'name':'French toast',
    'type':'starter',
    'image':'toast.jpg',
    'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
    'ingredients':[{
      'name':'eggs',
      'quantity':0.5,
      'unit':'',
      'price':10
    },{
      'name':'milk',
      'quantity':30,
      'unit':'ml',
      'price':6
    },{
      'name':'brown sugar',
      'quantity':7,
      'unit':'g',
      'price':1
    },{
      'name':'ground nutmeg',
      'quantity':0.5,
      'unit':'g',
      'price':12
    },{
      'name':'white bread',
      'quantity':2,
      'unit':'slices',
      'price':2
    }]
  },{
    'id':2,
    'name':'Sourdough Starter',
    'type':'starter',
    'image':'sourdough.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'active dry yeast',
      'quantity':0.5,
      'unit':'g',
      'price':4
    },{
      'name':'warm water',
      'quantity':30,
      'unit':'ml',
      'price':0
    },{
      'name':'all-purpose flour',
      'quantity':15,
      'unit':'g',
      'price':2
    }]
  },{
    'id':3,
    'name':'Baked Brie with Peaches',
    'type':'starter',
    'image':'bakedbrie.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'round Brie cheese',
      'quantity':10,
      'unit':'g',
      'price':8
    },{
      'name':'raspberry preserves',
      'quantity':15,
      'unit':'g',
      'price':10
    },{
      'name':'peaches',
      'quantity':1,
      'unit':'',
      'price':4
    }]
  },{
    'id':100,
    'name':'Meat balls',
    'type':'main dish',
    'image':'meatballs.jpg',
    'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
    'ingredients':[{
      'name':'extra lean ground beef',
      'quantity':115,
      'unit':'g',
      'price':20
    },{
      'name':'sea salt',
      'quantity':0.7,
      'unit':'g',
      'price':3
    },{
      'name':'small onion, diced',
      'quantity':0.25,
      'unit':'',
      'price':2
    },{
      'name':'garlic salt',
      'quantity':0.7,
      'unit':'g',
      'price':2
    },{
      'name':'Italian seasoning',
      'quantity':0.6,
      'unit':'g',
      'price':3
    },{
      'name':'dried oregano',
      'quantity':0.3,
      'unit':'g',
      'price':3
    },{
      'name':'crushed red pepper flakes',
      'quantity':0.6,
      'unit':'g',
      'price':3
    },{
      'name':'Worcestershire sauce',
      'quantity':6,
      'unit':'ml',
      'price':7
    },{
      'name':'milk',
      'quantity':20,
      'unit':'ml',
      'price':4
    },{
      'name':'grated Parmesan cheese',
      'quantity':5,
      'unit':'g',
      'price':8
    },{
      'name':'seasoned bread crumbs',
      'quantity':15,
      'unit':'g',
      'price':4
    }]
  },{
    'id':101,
    'name':'MD 2',
    'type':'main dish',
    'image':'bakedbrie.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'ingredient 1',
      'quantity':1,
      'unit':'pieces',
      'price':8
    },{
      'name':'ingredient 2',
      'quantity':15,
      'unit':'g',
      'price':7
    },{
      'name':'ingredient 3',
      'quantity':10,
      'unit':'ml',
      'price':4
    }]
  },{
    'id':102,
    'name':'MD 3',
    'type':'main dish',
    'image':'meatballs.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'ingredient 1',
      'quantity':2,
      'unit':'pieces',
      'price':8
    },{
      'name':'ingredient 2',
      'quantity':10,
      'unit':'g',
      'price':7
    },{
      'name':'ingredient 3',
      'quantity':5,
      'unit':'ml',
      'price':4
    }]
  },{
    'id':103,
    'name':'MD 4',
    'type':'main dish',
    'image':'meatballs.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'ingredient 1',
      'quantity':1,
      'unit':'pieces',
      'price':4
    },{
      'name':'ingredient 2',
      'quantity':12,
      'unit':'g',
      'price':7
    },{
      'name':'ingredient 3',
      'quantity':6,
      'unit':'ml',
      'price':4
    }]
  },{
    'id':200,
    'name':'Chocolat Ice cream',
    'type':'dessert',
    'image':'icecream.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'ice cream',
      'quantity':100,
      'unit':'ml',
      'price':6
    }]
  },{
    'id':201,
    'name':'Vanilla Ice cream',
    'type':'dessert',
    'image':'icecream.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'ice cream',
      'quantity':100,
      'unit':'ml',
      'price':6
    }]
  },{
    'id':202,
    'name':'Strawberry',
    'type':'dessert',
    'image':'icecream.jpg',
    'description':"Here is how you make it... Lore ipsum...",
    'ingredients':[{
      'name':'ice cream',
      'quantity':100,
      'unit':'ml',
      'price':6
    }]
  }
  ];
}
