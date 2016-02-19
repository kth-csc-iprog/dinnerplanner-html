var View4 = function (container, model) {
	this.numberOfGuests = container.find(".numberOfGuests");
	this.getTitleName = container.find(".titlename");
	this.getBigImg = container.find("#picspace");
	this.getTable = container.find("#ingritable");

	model.addObserver(this);

	this.update = function(obj) {

	}

	var bigDish = model.getDish(1);
			var bigImg = "";
			bigImg += "<img src='images/" + bigDish.image + "' class='storbild'>";
			this.getTitleName.html(bigDish.name);
			this.getBigImg.html(bigImg);


	var dishIngri = bigDish.ingredients;
			var tabledata = "";
		for (var i=0; i<dishIngri.length; i++){
			tabledata += "<tr class='table'><td>" + dishIngri[i].quantity * model.getNumberOfGuests() + "</td><td>"+ dishIngri[i].name + "</td><td>SEK</td><td>" + dishIngri[i].price * model.getNumberOfGuests() + "</td> </tr>";
			this.getTable.html(tabledata);
		}
			this.numberOfGuests.html(model.getNumberOfGuests());
}