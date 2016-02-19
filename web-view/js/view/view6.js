var View6 = function (container, model){
	model.addObserver(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishID = container.find("#dishID");
	this.menuPrice = container.find("#menuPrice");
	this.starterName = container.find("#starterName");
	this.starterPrice = container.find("#starterPrice");
	this.mainDishName = container.find("#mainDishName");
	this.mainDishPrice = container.find("#mainDishPrice");
	this.dessertName = container.find("#dessertName");
	this.dessertPrice = container.find("#dessertPrice");

	this.update = function(Object){
		var menuList = model.getFullMenu();
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.dishID.html(model.getDish(1).name);// fixa med input osv
		if(menuList[0]!=0){
			this.starterName.html(menuList[0].name);
			this.starterPrice.html(model.getDishPrice(menuList[0].id)*model.getNumberOfGuests());
		}
		if(menuList[1]!=0){
			this.mainDishName.html(menuList[1].name);
			this.mainDishPrice.html(model.getDishPrice(menuList[1].id)*model.getNumberOfGuests());
		}
		if(menuList[2]!=0){
			this.dessertName.html(menuList[2].name);
			this.dessertPrice.html(model.getDishPrice(menuList[2].id)*model.getNumberOfGuests());
		}
		this.menuPrice.html(model.getTotalMenuPrice());
	}

	var menuList = model.getFullMenu();
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dishID.html(model.getDish(1).name);// fixa med input osv
	//model.addDishToMenu(1);
	//model.addDishToMenu(100);
	model.addDishToMenu(202);
	if(menuList[0]!=0){
		this.starterName.html(menuList[0].name);
		this.starterPrice.html(model.getDishPrice(menuList[0].id)*model.getNumberOfGuests());
	}
	if(menuList[1]!=0){
		this.mainDishName.html(menuList[1].name);
		this.mainDishPrice.html(model.getDishPrice(menuList[1].id)*model.getNumberOfGuests());
	}
	if(menuList[2]!=0){
		this.dessertName.html(menuList[2].name);
		this.dessertPrice.html(model.getDishPrice(menuList[2].id)*model.getNumberOfGuests());
	}
	this.menuPrice.html(model.getTotalMenuPrice());
	
	
}