//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.numberOfGuests = container.find(".numberOfGuests");
	this.selectedDishes = container.find("#selectedDishes");
	this.fullMenu = container.find(".titta");
	this.totalMenuPrice = container.find("#totalMenuPrice");
	this.getDish = container.find(".mat");
	this.getTitleName = container.find(".titlename");
	this.getTitleName1 = container.find(".titlename1");
	this.getDescription = container.find(".desc")
	this.getBigImg = container.find("#picspace");


	//View 2&3 där småkvadraterna raddas upp för main, starter lr dessert!
	var kategori = model.getAllDishes("starter");
	var dish = "";
	for (var i=0; i<kategori.length; i++){
		dish +="<div class='kvadrat'><img src='images/" + kategori[i].image + "' class='bild'><div class='dishname'>" + kategori[i].name + "</div>Lorem ispum dolor</div>";
		this.getDish.html(dish);
	}
	
	//Lägger till rätter på menyn
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(202);

	//view 2,4 där en specifik rätt visas med stor bild
	var bigDish = model.getDish(1);
	var bigImg = "";
	bigImg += "<img src='images/" + bigDish.image + "' class='storbild'>";
	this.getTitleName.html(bigDish.name);
	this.getBigImg.html(bigImg);


	//view5 med menyn men tre bilder; förrätt, main o dessert
	var menu = model.getFullMenu();
	var food = "";
	for (var i=0; i<menu.length; i++){
		food +="<div class='kvadrat'><img src='images/" + menu[i].image + "' class='bild'><div class='dishname'>" + menu[i].name + "</div></div>";
		this.fullMenu.html(food);
	}



	//view 6 med bilder till vänster 
	var choice1 = model.getFullMenu();
	var choicie = "";
	for (var i=0; i<choice1.length; i++){
		choicie += "<div class='rutor'><img src='images/" + choice1[i].image + "' class='bild1'><div class='text'><h1 id='big'>" + choice1[i].name  + "</h1>Lorem ipsum dolor...</div></div>";
		this.getTitleName1.html(choicie);
	}


	//view 6 preperations! 
	var choice2 = model.getFullMenu();
	var choicie2 = "";
	for (var i=0; i<choice2.length; i++){
		choicie2 += "<div class='rutor'><h2 id='big'>PREPERATIONS</h2><p>" + choice2[i].description + "</p></div>";
		this.getDescription.html(choicie2);
	}



	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalMenuPrice.html(model.getTotalMenuPrice());
	
}
 
