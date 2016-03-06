// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {
  
  var numberOfGuest = 2;
  var menu   = [];

  var bigOvenKey = 'H9n1zb6es492fj87OxDtZM9s5sb29rW3';
  


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
    var fullMenu = [];

    //Iterate over the menu
    for (key in menu){
      //Get the details from the id and Add every dish to the array
      fullMenu.push(this.getDish(menu[key]));
    }

    return fullMenu;
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

  this.getDishPrice = function(id){
    var allIngredients = this.getDish(id).ingredients;
    var totalPrice = 0;

    // for each ingredient add the individual price multiply by the quantity to the total price
    for (key in allIngredients) {
      totalPrice += allIngredients[key].price;
    };

    return totalPrice;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(id) {
    // Get the dish associated with the id in the argument
    var dish = this.getDish(id);
    var foundDish = false;
    var i = menu.length-1;

    // If a dish exist with the id in argument
    if (dish !== null) {

      // Look if a dish of this type exist in the menu
      var prevDish = this.getSelectedDish(dish.type);
      
      // if it does remove it
      if ( prevDish !== null) {
        this.removeDishFromMenu(prevDish.id);
      };

      // We add the dish to the menu
      menu.push(dish.id);
    };

  }

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    var dish = null;

    // We iterate over the menu to find if a dish of the same type exist
    for (var i = menu.length - 1; i >= 0; i--) {
      dish = this.getDish(menu[i]);
      if (dish.id == id) {
        menu.splice(i,1);
  
        return true;

      };
    }

    return false;
  }

  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  this.getAllDishes = function (filter) {
    console.log('get dish');
    return $(dishes).filter(function(index,dish) {
    var found = true;
    if(filter){
      found = false;
      $.each(dish.ingredients,function(index,ingredient) {
        if(ingredient.name.indexOf(filter)!=-1) {
          found = true;
        }
      });
      if(dish.name.indexOf(filter) != -1)
      {
        found = true;
      }
    }
      return  found;
    }); 
  }


  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  this.getAllDishesRest = function (type,filter) {

    $.ajax({
      url: 'http://api.bigoven.com/recipes',
      type: 'GET',
      dataType: 'json',
      data: {
        api_key: bigOvenKey,
          title_kw: filter,
          photos: 1,
    },
    })
    .done(function(data) {
      console.log("success");
      console.log(data);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }


  //function that returns a dish of specific ID
  this.getDish = function (id) {
    for(key in dishes){
      if(dishes[key].id == id) {
        return dishes[key];
      }
    }
  }


  // the dishes variable contains an array of all the 
  // dishes in the database. each dish has id, name, type,
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

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});