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
	
		var newLink = document.createElement("a");
		newLink.setAttribute('href', 'dishDetails.html');
	
		var newDish = document.createElement("div");
		newDish.setAttribute('class', 'dish');
		newLink.appendChild(newDish);
		
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
		
		container.append(newLink);
    }
	
}
 

var dishDetails = function (container, model) {
	container.html('');
	var id = 1;
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var thisDish = model.getDish(id);
	
	var newDish = document.createElement("div");
	newDish.setAttribute('class', 'dishDetail');
	
	var dishName = document.createElement("div");
	dishName.setAttribute('class', 'DishDetailName');
	var Name = document.createTextNode(thisDish.name);
	dishName.appendChild(Name);
	newDish.appendChild(dishName);
	
	var dishImage = document.createElement("img");
	dishImage.setAttribute('class', 'DishDetailImage');
	dishImage.setAttribute('src', 'images/'+thisDish.image);
	newDish.appendChild(dishImage);
	
	var dishDesc = document.createElement("div");
	dishDesc.setAttribute('class', 'DishDetailDesc');
	var Desc = document.createTextNode(thisDish.description);
	dishDesc.appendChild(Desc);
	newDish.appendChild(dishDesc);
	
	var dishBackButton = document.createElement("a");
	dishBackButton.setAttribute('class', 'btn btn-default btn');
	var Desc = document.createTextNode("Back to select dish");
	dishBackButton.appendChild(Desc);
	dishBackButton.setAttribute('href', 'selectDish.html');
	newDish.appendChild(dishBackButton);
	
	var prepTitle = document.createElement("div");
	prepTitle.setAttribute('class', 'prepTitle');
	var Desc = document.createTextNode("PREPARATION");
	prepTitle.appendChild(Desc);
	newDish.appendChild(prepTitle);
	
	var prepText = document.createElement("div");
	prepText.setAttribute('class', 'DishDetailDesc');
	var Desc = document.createTextNode(thisDish.description);
	prepText.appendChild(Desc);
	newDish.appendChild(prepText);
	
	container.append(newDish);
	
}

var ingredientsTable = function (container, model) {

	var id = 1;
	var numOfPeople = 4;
	var thisDish = model.getDish(id);
	
	container.find("#tableTitle").html("Ingredients for "+numOfPeople+" people")
	var thisDish = model.getDish(id);
	var total = 0;
	for(var i=0; i<thisDish.ingredients.length; i++){
		var newRow = document.createElement("tr");
			newRow.setAttribute('id','id'+i);
			container.find("#ingredientTable").append(newRow);
		var ingQuant = document.createElement("td");
			container.find("#id"+i).append(ingQuant);
			var Quant = document.createTextNode(numOfPeople*(thisDish.ingredients[i].quantity));
			ingQuant.appendChild(Quant);
		
		ingQuant = document.createElement("td");
			container.find("#id"+i).append(ingQuant);
			Quant = document.createTextNode(thisDish.ingredients[i].unit);
			ingQuant.appendChild(Quant);
		
		ingQuant = document.createElement("td");
			container.find("#id"+i).append(ingQuant);
			Quant = document.createTextNode(thisDish.ingredients[i].name);
			ingQuant.appendChild(Quant);
		
		ingQuant = document.createElement("td");
			container.find("#id"+i).append(ingQuant);
			Quant = document.createTextNode(thisDish.ingredients[i].price+" SEK");
			ingQuant.appendChild(Quant);
		total += thisDish.ingredients[i].price;
	}
	var confirmBtn = document.createElement("a");
	confirmBtn.setAttribute('class', 'btn btn-default btn');
	var btnText = document.createTextNode("confirm dish");
	confirmBtn.appendChild(btnText);
	container.find("#tableConfirm-Left").append(confirmBtn);
	
	console.log(total);
	
	var dishPrice = document.createElement("div");
	dishPrice.setAttribute('class', 'detailTotal');
	var Desc = document.createTextNode((total+" SEK"));
	dishPrice.appendChild(Desc);
	container.find("#tableConfirm-Right").append(dishPrice);
	
}	  