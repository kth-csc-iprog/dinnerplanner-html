
/*main pictures
gets the pictures and name of the dishes for view2 and 4 */ 
var MainPic = function (container, model) {
	

	var dishName = container.find("#name");
	dishName.html(model.getDish(1).name);
	
	var dishImg = container.find("#img");
	console.log("images/" + model.getDish(1).image);
	dishImg.html("images/" + model.getDish(1).image);

	var picBox = container.find("#template");
	
}
 