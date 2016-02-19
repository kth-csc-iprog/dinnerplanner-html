var View6 = function (container, model){
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishID = container.find("#dishID");
	this.menuPrice = container.find("#menuPrice");
	
	this.starterName = container.find("#starterName");
	this.starterPrice = container.find("#starterPrice");
	this.mainDishName = container.find("#mainDishName");
	this.mainDishPrice = container.find("#mainDishPrice");
	this.dessertName = container.find("#dessertName");
	this.dessertPrice = container.find("#dessertPrice");
	
	var menuList = model.getFullMenu();
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.dishID.html(model.getDish(1).name);// fixa med input osv
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(202);
	this.starterName.html(menuList[0].name);
	this.starterPrice.html(model.getDishPrice(menuList[0].id));
	this.mainDishName.html(menuList[1].name);
	this.mainDishPrice.html(model.getDishPrice(menuList[1].id));
	this.dessertName.html(menuList[2].name);
	this.dessertPrice.html(model.getDishPrice(menuList[2].id));
	this.menuPrice.html(model.getTotalMenuPrice());
}