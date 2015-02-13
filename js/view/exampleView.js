//ExampleView Object constructor
var ExampleView = function (container, model) {
	container.html('');
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html("Hello World");
	var allDishes = model.getAllDishes('main dish','');
	for(var i=0; i<allDishes.length; i++){
		var newDish = document.createElement("div");
		newDish.setAttribute('class', 'dish');
		
		var dishName = document.createElement("div");
		dishName.setAttribute('class', 'DishName');
		var Name = document.createTextNode(allDishes[i].name);
		dishName.appendChild(Name);
		newDish.appendChild(dishName);
		
		var dishImage = document.createElement("img");
		dishImage.setAttribute('class', 'DishImage');
		dishImage.setAttribute('src', 'images/'+allDishes[i].image);
		newDish.appendChild(dishImage);
		
		var dishDesc = document.createElement("div");
		dishDesc.setAttribute('class', 'DishDesc');
		var Desc = document.createTextNode(allDishes[i].description);
		dishDesc.appendChild(Desc);
		newDish.appendChild(dishDesc);
		
		container.append(newDish);
    }
	
}
 

var dishDetails = function (container, model) {
	container.html('');
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html("Hello World");
	var allDishes = model.getAllDishes('main dish','');
	for(var i=0; i<allDishes.length; i++){
		var newDish = document.createElement("div");
		newDish.setAttribute('class', 'dish');
		
		var dishName = document.createElement("div");
		dishName.setAttribute('class', 'DishName');
		var Name = document.createTextNode(allDishes[i].name);
		dishName.appendChild(Name);
		newDish.appendChild(dishName);
		
		var dishImage = document.createElement("img");
		dishImage.setAttribute('class', 'DishImage');
		dishImage.setAttribute('src', 'images/'+allDishes[i].image);
		newDish.appendChild(dishImage);
		
		var dishDesc = document.createElement("div");
		dishDesc.setAttribute('class', 'DishDesc');
		var Desc = document.createTextNode(allDishes[i].description);
		dishDesc.appendChild(Desc);
		newDish.appendChild(dishDesc);
		
		container.append(newDish);
    }
	
}	  