//DinnerModel Object constructor
var DinnerModel = function() {

	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

  this.guestCount = new Event(this);

  var guests = 0;
  var menu = [];

  var observers=[];
      this.addObserver=function(observer){ observers.push(observer); }

      this.notifyObservers=function(details){
          for(var i=0; i<observers.length; i++)
               observers[i](this, details); // we will make sure that observers[i] is a function, so we can call it like observers[i](parameters)
      }

      this.removeObserver=function(observer){  /* remove observer from array */}

  //.... other model data and code calling notifyObservers() when the model changes

	this.setNumberOfGuests = function(num) {
		//TODO Lab 1
    guests = num;
    //Notify observers that a change has occurred (STEP 10)
    this.guestCount.notify();
	}

	this.getNumberOfGuests = function() {
		//TODO Lab 1
    return guests;
	}



	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		//TODO Lab 1
    for (var i = 0; i < menu.length; i++) {
      var menuDish = this.getDish(menu[i])
      if (menuDish.type === type) {
        return menuDish.name;
      }
    }
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {

  var menuDishes = "";
  for (var i = 0; i < menu.length; i++) {
    var menuDishes = menuDishes + this.getDish(menu[i]).name + ", ";
  }
  //change return into list of objects
  return menuDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
    var ingredients = [];
		//TODO Lab 1
    for (var i = 0; i < menu.length; i++) {
      var dish = this.getDish(menu[i]);
      for (var j = 0; j < dish.ingredients.length; j++) {
        ingredients.push(dish.ingredients[j].name);
      }
    }
  return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 1
    var price = 0;
    for (var i = 0; i < menu.length; i++) {
      var dish = this.getDish(menu[i]);
      for (var j = 0; j < dish.ingredients.length; j++) {
        var ingredient = dish.ingredients[j];
        price+= ingredient.quantity * ingredient.price;
      }
    }
    return price * guests;
	}


	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id){
		//TODO Lab 1
    var newDish = this.getDish(id);
    for (var i = 0; i < menu.length; i++) {
      var existingDish = this.getDish(menu[i]);
      if (newDish.type === existingDish.type) {
        menu[i] = newDish.id;
        return;
      }
    }
    menu.push(id);
    return;
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 1
    for (var i = 0; i < menu.length; i++) {
      if(menu[i] === id){
        menu.splice(i, 1);
      }
    }
  return menu.toString();
	}


	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return dishes.filter(function(dish) {
		var found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id === id) {
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
		'description':"Combine the cream and coffee in a medium, heavy saucepan. Bring to a gentle boil over medium heat to dissolve the coffee. Remove from heat and strain the mixture into the bowl of your mixer. Cool in fridge. Meanwhile, whisk together sweetened condensed milk and chocolate ice cream topping in large bowl. Set aside.When chilled, beat the cream to stiff peaks. Fold into sweetened condensed milk mixture. Pour into a 2-quart container and cover. Store in freezer. After 1 hour, remove from freezer and swirl on the Chocolate Fudge Magic Shell. Stir gently once or twice. Return to freezer for another hour, then remove and gently stir, breaking up the fudge shell. Add more if desired, and repeat 2-3 times as desired.",
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
