
var ExampleView = function (container, model) {
	this.fullMenu = container.find(".titta");
	this.numberOfGuests = container.find(".numberOfGuests");
	this.totalMenuPrice = container.find("#totalMenuPrice");
	this.getDish = container.find(".mat");
	this.getTitleName = container.find(".titlename");
	this.getBigImg = container.find("#picspace");
	this.getTable = container.find("#ingritable");
	//view 2,4 där en specifik rätt visas med stor bild
		var bigDish = model.getDish(1);
		var bigImg = "";
		bigImg += "<img src='images/" + bigDish.image + "' class='storbild'>";
		this.getTitleName.html(bigDish.name);
		this.getBigImg.html(bigImg);

		var menutext = model.getFullMenu();
		var menu = "";
		for (var i=0; i<menutext.length; i++){
			menu +="<p>" + menutext[i].name + "</p>";
			this.fullMenu.html(menu);
			}

		var dishIngri = bigDish.ingredients;
		var tabledata = "";
		for (var i=0; i<dishIngri.length; i++){
			tabledata += "<tr class='table'><td>" + dishIngri[i].quantity + "</td><td>"+ dishIngri[i].name + "</td><td>SEK</td><td>" + dishIngri[i].price + "</td> </tr>";
			this.getTable.html(tabledata);
		}
			this.numberOfGuests.html(model.getNumberOfGuests());
			this.totalMenuPrice.html(model.getTotalMenuPrice());
}