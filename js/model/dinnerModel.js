//DinnerModel Object constructor
var DinnerModel = function() {

		var NumberOfGuests =0;
		var Menu = [];
		var Pending = 0;
		Menu['dessert']=202;
		Menu['main dish']=100;
	
	this.setNumberOfGuests = function(num) {
		
		NumberOfGuests = num;
	}

	// should return 
	this.getNumberOfGuests = function() {
		
		return myDinner.NumberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		Menu[type];
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		var fullMenu = [];
		for(key in Menu) {
			fullMenu.push(this.getDish(Menu[key]));
		}
		return fullMenu;
		//return Menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var allIngredients = [];
		for(key in Menu) {
			var dish = this.getDish(Menu[key]);
			allIngredients = allIngredients.concat(dish.ingredients);
		}
		console.log(allIngredients);
		return allIngredients;
		
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var allIngredients = this.getAllIngredients();
		var Total = 0;
		for(key in allIngredients){
			Total += allIngredients[key].price;
		}
		return Total;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var dishType = '';
		for(key in dishes){
			if (dishes[key].id == id){
				dishType = dishes[key].type;
			}
		}
		Menu[dishType] = id;
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var dishType = '';
		for(key in dishes){
			if (dishes[key].id == id){
				dishType = dishes[key].type;
			}
		}
		Menu['dishType'] = '';
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
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
	  	return dish.type == type && found;
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
	
	this.priceOfDish = function (id, numOfPeople){
		var theDish = this.getDish(id);
		var total = 0;
		for(var i=0; i<theDish.ingredients.length;i++){
			total += theDish.ingredients[i].price;
		}
		return total*numOfPeople;
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
		'image':'starter1.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'image':'starter2.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'image':'starter1.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'image':'main1.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'image':'main2.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'image':'main3.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'image':'main1.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'id':104,
		'name':'Meat balls',
		'type':'main dish',
		'image':'main1.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'id':105,
		'name':'MD 2',
		'type':'main dish',
		'image':'main2.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'id':106,
		'name':'MD 3',
		'type':'main dish',
		'image':'main3.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'id':107,
		'name':'MD 4',
		'type':'main dish',
		'image':'main1.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'image':'dessert1.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'image':'desert2.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
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
		'image':'dessert3.jpg',
		'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}