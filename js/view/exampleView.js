//ExampleView Object constructor
var dishContentView = function (container, model) {
	var dishContentViewUpdate = function() {
		container.html('');
		//var currentType = $("#filter").val();
		var currentType = model.getType();
		var currentFilter = model.getFilter();
		var allDishes = model.getAllDishes(currentType, currentFilter);
		for (var i = 0; i < allDishes.length; i++) {
	
			var newLink = document.createElement("a");
			newLink.setAttribute('href', '#');
			newLink.setAttribute('class', 'callDishDetails');
			newLink.setAttribute('data-id', allDishes[i].id);
	
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
			dishImage.setAttribute('src', 'images/' + allDishes[i].image);
			newDish.appendChild(dishImage);
		
			var dishDesc = document.createElement("div");
			dishDesc.setAttribute('class', 'DishDesc');
			var Desc = document.createTextNode(allDishes[i].description);
			dishDesc.appendChild(Desc);
			newDish.appendChild(dishDesc);
		
			container.append(newLink);
		}
	}
    //model.addObserver(this);
    model.addObserver(this);
	this.update = function(arg){
		switch(arg){
			case "filter":
				dishContentViewUpdate();
			break;
			case "type":
				dishContentViewUpdate();
			break;
		}
	};
};
 

var dishDetails = function (container, model) {
	var dishDetailUpdate = function(id){
		container.html('');
		//var id = 200;

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
		dishImage.setAttribute('src', 'images/' + thisDish.image);
		newDish.appendChild(dishImage);
	
		var dishDesc = document.createElement("div");
		dishDesc.setAttribute('class', 'DishDetailDesc');
		var Desc = document.createTextNode(thisDish.description);
		dishDesc.appendChild(Desc);
		newDish.appendChild(dishDesc);
	
		var dishBackButton = document.createElement("a");
		dishBackButton.setAttribute('class', 'btn btn-default btn')
		dishBackButton.setAttribute('id', 'backFromDetails');
		Desc = document.createTextNode("Back to select dish");
		dishBackButton.appendChild(Desc);
		dishBackButton.setAttribute('href', '#');
		newDish.appendChild(dishBackButton);
	
		var prepTitle = document.createElement("div");
		prepTitle.setAttribute('class', 'prepTitle');
		Desc = document.createTextNode("PREPARATION");
		prepTitle.appendChild(Desc);
		newDish.appendChild(prepTitle);
	
		var prepText = document.createElement("div");
		prepText.setAttribute('class', 'DishDetailDesc');
		Desc = document.createTextNode(thisDish.description);
		prepText.appendChild(Desc);
		newDish.appendChild(prepText);
	
		container.append(newDish);
	}
	model.addObserver(this);
	this.update = function(arg){
		switch(arg){
			case "dishDetailID":
				var theID = model.getDishDetailID();
				dishDetailUpdate(theID);
			break;
		}
	};
};

var ingredientsTable = function (container, model) {

	var ingredientsTableUpdate = function(id, numOfPeople){
		var thisDish = model.getDish(id);
		container.find("#tableTitle").html("");
		container.find("#tableTitle").html("Ingredients for " + numOfPeople + " people");
		var total = 0;
		container.find("#ingredientTable").html('');
		for (var i = 0; i < thisDish.ingredients.length; i++) {
			var newRow = document.createElement("tr");
			newRow.setAttribute('id', 'id' + i);
			container.find("#ingredientTable").append(newRow);
		
			var ingQuant = document.createElement("td");
			container.find("#id" + i).append(ingQuant);
		
			var Quant = document.createTextNode(numOfPeople * (thisDish.ingredients[i].quantity));
			ingQuant.appendChild(Quant);
		
			ingQuant = document.createElement("td");
			container.find("#id" + i).append(ingQuant);
			Quant = document.createTextNode(thisDish.ingredients[i].unit);
			ingQuant.appendChild(Quant);
		
			ingQuant = document.createElement("td");
			container.find("#id" + i).append(ingQuant);
			Quant = document.createTextNode(thisDish.ingredients[i].name);
			ingQuant.appendChild(Quant);
		
			ingQuant = document.createElement("td");
			container.find("#id" + i).append(ingQuant);
			Quant = document.createTextNode((numOfPeople * thisDish.ingredients[i].price) + " SEK");
			ingQuant.appendChild(Quant);
			total += numOfPeople * thisDish.ingredients[i].price;
		}
		model.setPending(total);
		var confirmBtn = document.createElement("a");
		confirmBtn.setAttribute('class', 'btn btn-default btn')
		confirmBtn.setAttribute('id', 'addDishButton');
		var btnText = document.createTextNode("confirm dish");
		confirmBtn.appendChild(btnText);
		container.find("#tableConfirm-Left").html('');
		container.find("#tableConfirm-Left").append(confirmBtn);
		var dishPrice = document.createElement("div");
		dishPrice.setAttribute('class', 'detailTotal');
		var Desc = document.createTextNode((total + " SEK"));
		dishPrice.appendChild(Desc);
		container.find("#tableConfirm-Right").html('');
		container.find("#tableConfirm-Right").append(dishPrice);
	}
	
	model.addObserver(this);
	this.update = function(arg){
		switch(arg){
			case "dishDetailID":
				var theID = model.getDishDetailID();
				var numOfPeople = model.getNumberOfGuests();
				ingredientsTableUpdate(theID, numOfPeople);
			break;
			case "numOfGuests":
				var theID = model.getDishDetailID();
				var numOfPeople = model.getNumberOfGuests();
				ingredientsTableUpdate(theID, numOfPeople);
			break;
		}
	};
	
};

var pendingMenu = function (container, model) {
	var pendingMenuUpdate = function(){
		var numOfPeople = model.getNumberOfGuests();
		var newRow = "";
		var menuItem = "";
		var content = "";
		var theMenu = model.getFullMenu();
		container.find("#pendingMenuTable").html('');
		for (var key in theMenu) {
			newRow = document.createElement("tr");
			newRow.setAttribute('id', 'menuId' + key);
			container.find("#pendingMenuTable").append(newRow);
		
			menuItem = document.createElement("td");
			container.find("#menuId" + key).append(menuItem);
		
			content = document.createTextNode(theMenu[key].name);
			menuItem.appendChild(content);
			menuItem = document.createElement("td");
			container.find("#menuId" + key).append(menuItem);
			content = document.createTextNode(model.priceOfDish(theMenu[key].id, numOfPeople));
			menuItem.appendChild(content);
		}
		newRow = document.createElement("tr");
		newRow.setAttribute('id', 'pendingElement');
		container.find("#pendingMenuTable").append(newRow);
	
		menuItem = document.createElement("td");
		container.find("#pendingElement").append(menuItem);
		content = document.createTextNode("Pending");
		menuItem.appendChild(content);
		
		menuItem = document.createElement("td");
		container.find("#pendingElement").append(menuItem);
		content = document.createTextNode(model.getPending());
		menuItem.appendChild(content);
	
		var total = numOfPeople * (model.getTotalMenuPrice());
		total += model.getPending();
		content = document.createTextNode("Total: SEK " + total);
		container.find("#totalPending").html('');
		container.find("#totalPending").append(content);
	};
	model.addObserver(this);
	this.update = function(arg){
		switch(arg){
			case "numOfGuests":
				pendingMenuUpdate();
			break;
			case "addedDish":
				pendingMenuUpdate();
			break;
			case "Pending":
				pendingMenuUpdate();
			break;
		}
	};

};


var dinnerOverview = function (container, model) {
	var dinnerOverviewUpdate = function(){
		var numOfPeople = model.getNumberOfGuests();
		$("#peopleNr").html(numOfPeople);
		var theMenu = model.getFullMenu();
		var total = 0;
		container.html('');
		for (var key in theMenu) {
			var newDish = document.createElement("div");
			newDish.setAttribute('class', 'dish');
			
			var dishName = document.createElement("div");
			dishName.setAttribute('class', 'DishName');
			var Name = document.createTextNode(theMenu[key].name);
			dishName.appendChild(Name);
			newDish.appendChild(dishName);
			
			var dishImage = document.createElement("img");
			dishImage.setAttribute('class', 'DishImage');
			dishImage.setAttribute('src', 'images/' + theMenu[key].image);
			newDish.appendChild(dishImage);
			
			var dishPrice = model.priceOfDish(theMenu[key].id, numOfPeople);
			var dishDesc = document.createElement("div");
			total += dishPrice;
			
			dishDesc.setAttribute('class', 'DishDesc');
			var Desc = document.createTextNode("SEK " + dishPrice);
			dishDesc.appendChild(Desc);
			newDish.appendChild(dishDesc);
			container.append(newDish);
		}
		var dinnerTotal = document.createElement("div");
		var totalText = document.createTextNode("Total: SEK " + total);
		dinnerTotal.appendChild(totalText);
		container.append(dinnerTotal);
	}
	model.addObserver(this);
	this.update = function(arg){
		switch(arg){
			case "numOfGuests":
				dinnerOverviewUpdate();
			break;
			case "addedDish":
				dinnerOverviewUpdate();
			break;
		}
	};
};


var dinnerRecipies = function (container, model) {
	var dinnerRecipesUpdate = function(){
		var numOfPeople = model.getNumberOfGuests();
		$("#peopleNrRec").html(numOfPeople);
		var theMenu = model.getFullMenu();
		container.html('');
		for (var key in theMenu) {
			var newRecipe = document.createElement("div");
			newRecipe.setAttribute('class', 'row recipe');
			
			var dishImage = document.createElement("img");
			dishImage.setAttribute('class', 'col-md-2 DishImage');
			dishImage.setAttribute('src', 'images/' + theMenu[key].image);
			newRecipe.appendChild(dishImage);
			
			var dishDesc = document.createElement("div");
			dishDesc.setAttribute('class', 'col-md-5 text-left DishDesc');
			var descHeader = document.createElement("h4");
			var descName = document.createTextNode(theMenu[key].name);
			descHeader.appendChild(descName);
			dishDesc.appendChild(descHeader);
			
			var descCont = document.createElement("p");
			var content = document.createTextNode(theMenu[key].description);
			descCont.appendChild(content);
			dishDesc.appendChild(descCont);
			newRecipe.appendChild(dishDesc);
			
			var dishPrep = document.createElement("div");
			dishPrep.setAttribute('class', 'col-md-5 text-left DishPrep');
			var prepHeader = document.createElement("h4");
			var prepName = document.createTextNode("Preparation");
			prepHeader.appendChild(prepName);
			dishPrep.appendChild(prepHeader);
			
			var prepCont = document.createElement("p");
			var contentp = document.createTextNode(theMenu[key].description);
			prepCont.appendChild(contentp);
			dishPrep.appendChild(prepCont);
			newRecipe.appendChild(dishPrep);
			
			container.append(newRecipe);
		}
	}
	model.addObserver(this);
	this.update = function(arg){
		switch(arg){
			case "numOfGuests":
				dinnerRecipesUpdate();
			break;
			case "addedDish":
				dinnerRecipesUpdate();
			break;
		}
	};
};