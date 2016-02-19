var View6 = function (container, model) {
	this.numberOfGuests = container.find(".numberOfGuests");
	this.totalMenuPrice = container.find("#totalMenuPrice");
	this.getTitleName1 = container.find(".titlename1");
	this.getDescription = container.find(".desc");

	model.addObserver(this);

	this.update = function(obj) {
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