//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dish = container.find("#dishID");
	this.output = container.find("#output");
	this.name = container.find("#name");
	this.pic = container.find("#pic");
	this.desc = container.find("#desc");
	
	this.dish = container.find("#dishID");
	this.dishBox = container.find("#dishBox");
	this.menuPrice = container.find("#menuPrice");
	
	this.starterImage = container.find("#starterImage");
	this.starterName = container.find("#starterName");
	this.starterDescription = container.find("#starterDescription");
	this.starterPrice = container.find("#starterPrice");
	
	this.mainDishImage = container.find("#mainDishImage");
	this.mainDishName = container.find("#mainDishName");
	this.mainDishDescription = container.find("#mainDishDescription");
	this.mainDishPrice=container.find("#mainDishPrice");
	
	this.dessertImage = container.find("#dessertImage");
	this.dessertName = container.find("#dessertName");
	this.dessertDescription = container.find("#dessertDescription");
	this.dessertPrice=container.find("#dessertPrice");
	
	
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dish.html(model.getDish(1).name);
	var dishList = model.getAllDishes("main dish");
	console.log(model.getDishPrice(1));
	var dishOutput = "";
	for(i = 0; i < dishList.length; i ++){
		console.log(i);
		dishOutput += "<div class='col-md-2'><div id ='box'>"+"<div>"+"<img src = 'images/" +dishList[i].image +"' class='imgSize'>"+"</div>"+"<div class='imgSize'>"+dishList[i].name+"</div></div><div style='width: 100%'>"+"Super duper najs mat"+"</div></div>";
	}
	this.dishBox.html(dishOutput);
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(202);
	var imgDesc = "";
	var menuList = model.getFullMenu();
	console.log(menuList);
	imgDesc = "<img src='images/"+menuList[0].image+"'>";
	this.starterImage.html(imgDesc);
	this.starterDescription.html(menuList[0].description);
	this.starterName.html(menuList[0].name);
	this.starterPrice.html(model.getDishPrice(menuList[0].id));
	imgDesc = "<img src='images/"+menuList[1].image+"'>";
	this.mainDishImage.html(imgDesc)
	this.mainDishName.html(menuList[1].name);;
	this.mainDishDescription.html(menuList[1].description);
	this.mainDishPrice.html(model.getDishPrice(menuList[1].id));
	imgDesc = "<img src='images/"+menuList[2].image+"'>";
	this.dessertImage.html(imgDesc);
	this.dessertName.html(menuList[2].name);
	this.dessertDescription.html(menuList[2].description);
	this.dessertPrice.html(model.getDishPrice(menuList[2].id));
	
	this.menuPrice.html(model.getTotalMenuPrice());
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dish.html(model.getDish(1));
	
	//Maträtt, bild och beskrivning
	var imgSrc = "<img src='images/" + model.getDish(1).image + "'alt=`food` width='100%' height='100%'/>";
	
	this.name.html(model.getDish(1).name);
	this.pic.html(imgSrc);
	this.desc.html(model.getDish(1).description);
	console.log(model.getDish(1).name);
	
	//Listar Ingredienserna
	var len = model.getDish(1).ingredients.length;
	var ingName = [];
	var ingQ = [];
	var ingUnit = [];
	var ingPrice = [];
	
	for (i = 0; i < len; i++){
		ingName.push(model.getDish(1).ingredients[i].name);
	}
	
	for (i = 0; i < len; i++){
		ingQ.push(model.getDish(1).ingredients[i].quantity);
	}
	
	for (i = 0; i < len; i++){
		ingUnit.push(model.getDish(1).ingredients[i].unit);
	}
	
	for (i = 0; i < len; i++){
		ingPrice.push(model.getDish(1).ingredients[i].price);
	}
	
	//Nytt försök
	var output = "";
	for (i = 0; i < len; i++){
		output += "<div class='row rad'>" + "<div class='col-md-3'>" + ingQ[i] + "</div>" + "<div class='col-md-3'>" + ingUnit[i] + "</div>" + "<div class='col-md-3'>" + ingName[i] + "</div>" + "SEK" +  "<div class='col-md-3'>" + ingPrice[i] + "</div>" + "</div>";
	}
	
	//Sätter ingredienserna 
	this.output.html(output);
	
	console.log(output);
}
