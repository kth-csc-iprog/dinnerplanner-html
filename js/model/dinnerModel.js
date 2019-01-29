var DinnerModel = function() {
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
	var guestNum = 1;
	var totalPrice = 40;
	var dishMenu = [{

		'id':1,
		'name':'Frenched toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"Not even French...",

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
		'description':"Who even likes sourdough? Why can't it be happy?",

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
		'description':"Brie... oh how I despise thee",

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
		'description':"As the name suggests, it's not suitable for vegans in the slightest.",

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
		'description':"Come on, it's just Brie again but even worse!",

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
		'description':"You sacrifice your firstborn child to Knack.",

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
		'description':"Look at a mirror and think about hot bois.",

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
		'description':"Find a snowman and make him teach you the secret of nice-cream.",

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
		'description':"Be bad at sex, the rest comes naturally.",

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
		'description':"Listen to De Vet Du and imagine yourself as a gay boi.",

		'ingredients':[{

			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}];

	this.setGuestNum = function(num) {
		guestNum += num;
	}

	this.getGuestNum = function() {
		return guestNum;
	}
	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		return dishMenu.find(x => x.type === type);
	}
	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return dishMenu;
	}
	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		for (key in dishMenu) {
			return dishMenu[key].ingredients;
		}
	}
	//Returns the total price of the dish (all the ingredients multiplied by number of guests).
	this.getTotalDishPrice = function(id) {
		var totalDishPrice = 0;
		var people = this.getGuestNum();
		var dishIngredientList = dishMenu.find(x => x.id === id).ingredients;
		for (key in dishIngredientList){
			totalDishPrice += dishIngredientList[key].price*people;
		}
		return totalDishPrice;
	}
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalPrice = 0;
		var people = this.getGuestNum();
		var ingredientList = this.getAllIngredients();
		for (key in ingredientList) {
			totalPrice += ingredientList[key].price*people;
		}
		return totalPrice;
	}
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var newDish = this.getDish(id)
		var oldDish = this.getSelectedDish(newDish.type)
			if (oldDish.type === newDish.type) {
				removeDishFromMenu(oldDish.id);
			}
		dishMenu.push(newDish);
	}
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var idx = dishMenu.findIndex(x => x.id === id);
		delete dishMenu[idx];
	}

	this.getAllDishes = function(type,filter) {
	  return dishes.filter(function(dish) {
		var found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)	{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });
	}
	//function that returns a dish of specific ID
	this.getDish = function(id) {
	    for(key in dishes){
		if(dishes[key].id == id) {
		    return dishes[key];
		}
	    }
	}
	// the dishes constant contains an array of all the
	// dishes in the database. Each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
        var dishes = [{

					'id':1,
					'name':'Frenched toast',
					'type':'starter',
					'image':'toast.jpg',
					'description':"Not even French...",

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
					'description':"Who even likes sourdough? Why can't it be happy?",

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
					'description':"Brie... oh how I despise thee",

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
					'description':"As the name suggests, it's not suitable for vegans in the slightest.",

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
					'description':"Come on, it's just Brie again but even worse!",

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
					'description':"You sacrifice your firstborn child to Knack.",

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
					'description':"Look at a mirror and think about hot bois.",

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
					'description':"Find a snowman and make him teach you the secret of nice-cream.",

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
					'description':"Be bad at sex, the rest comes naturally.",

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
					'description':"Listen to De Vet Du and imagine yourself as a gay boi.",

					'ingredients':[{

						'name':'ice cream',
						'quantity':100,
						'unit':'ml',
						'price':6
						}]
					}];
}
