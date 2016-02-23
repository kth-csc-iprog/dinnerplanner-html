var View4 = function (container, model){
	model.addObserver(this);
	
	this.numberOfGuests = container.find("#numberOfGuests");
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
	
	this.menuPrice = container.find("#menuPrice");
	
	var dishList = model.getAllDishes("main dish");
	this.numberOfGuests.html(model.getNumberOfGuests());
	var imgDesc = "";
	var menuList = model.getFullMenu();

	if(menuList[0] != 0){
		imgDesc = "<img src='images/"+menuList[0].image+"'>";
		this.starterImage.html(imgDesc);
		this.starterDescription.html(menuList[0].description);
		this.starterName.html(menuList[0].name);
		this.starterPrice.html(model.getDishPrice(menuList[0].id));
	}

	if(menuList[1] != 0){
		imgDesc = "<img src='images/"+menuList[1].image+"'>";
		this.mainDishImage.html(imgDesc)
		this.mainDishName.html(menuList[1].name);;
		this.mainDishDescription.html(menuList[1].description);
		this.mainDishPrice.html(model.getDishPrice(menuList[1].id));
	}

	if(menuList[2] != 0){
		imgDesc = "<img src='images/"+menuList[2].image+"'>";
		this.dessertImage.html(imgDesc);
		this.dessertName.html(menuList[2].name);
		this.dessertDescription.html(menuList[2].description);
		this.dessertPrice.html(model.getDishPrice(menuList[2].id));
	}
	
	this.menuPrice.html(model.getTotalMenuPrice());
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.menuPrice.html(model.getTotalMenuPrice());

	this.update = function(Object){
		var dishList = model.getAllDishes("main dish");
		this.numberOfGuests.html(model.getNumberOfGuests());
		var imgDesc = "";
		var menuList = model.getFullMenu();

		if(menuList[0] != 0){
			imgDesc = "<img src='images/"+menuList[0].image+"'>";
			this.starterImage.html(imgDesc);
			this.starterDescription.html(menuList[0].description);
			this.starterName.html(menuList[0].name);
			this.starterPrice.html(model.getDishPrice(menuList[0].id));
		}

		if(menuList[1] != 0){
			imgDesc = "<img src='images/"+menuList[1].image+"'>";
			this.mainDishImage.html(imgDesc)
			this.mainDishName.html(menuList[1].name);;
			this.mainDishDescription.html(menuList[1].description);
			this.mainDishPrice.html(model.getDishPrice(menuList[1].id));
		}

		if(menuList[2] != 0){
			imgDesc = "<img src='images/"+menuList[2].image+"'>";
			this.dessertImage.html(imgDesc);
			this.dessertName.html(menuList[2].name);
			this.dessertDescription.html(menuList[2].description);
			this.dessertPrice.html(model.getDishPrice(menuList[2].id));
		}
		
		this.menuPrice.html(model.getTotalMenuPrice());
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.menuPrice.html(model.getTotalMenuPrice());
	}
}