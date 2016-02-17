var View3 = function (container, model){
	this.dishBox = container.find("#dishBox");
	
	
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.name = container.find("#name");
	this.pic = container.find("#pic");
	this.desc = container.find("#desc");
	this.output = container.find("#output");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	var imgSrc = "<img src='images/" + model.getDish(1).image + "'alt=`food` width='100%' height='100%'/>";
	
	this.name.html(model.getDish(1).name);
	this.pic.html(imgSrc);
	this.desc.html(model.getDish(1).description);
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
	this.output.html(output);
}