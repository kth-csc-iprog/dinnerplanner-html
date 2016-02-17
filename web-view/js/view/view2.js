var View2 = function (container, model){
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishBox = container.find("#dishBox");
	var dishOutput = "";
	var dishList = model.getAllDishes("starter");
	for(i = 0; i < dishList.length; i ++){
		dishOutput += "<div class='col-md-2'><div id ='box'>"+"<div>"+"<img src = 'images/" +dishList[i].image +"' class='imgSize'>"+"</div>"+"<div class='imgSize'>"+dishList[i].name+"</div></div><div style='width: 100%'>"+"Super duper najs mat"+"</div></div>";
	}
	
	this.dishBox.html(dishOutput);
	this.numberOfGuests.html(model.getNumberOfGuests());
	
}