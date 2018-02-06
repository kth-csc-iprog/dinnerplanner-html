
/*main pictures
gets the pictures and name of the dishes for view2 and 4 */ 
var MainPic = function (container, model) {
	/*var menu =[1,2,101,102]
	Ska ändras i labb 2, ska kopplas till det sökta. */
	/*var menu = model.getFullMenu();*/
	var menu = model.getAllDishes();
	console.log(menu); 
  	var string = '';
  	var picBox = container.find("#template");
  
	for(i in menu){
		string += '<div class="col-md-4 col-sm-6"><a href="#" class="thumbnail"><img src="images/' + model.getDish(menu[i].id).image + ' " ><div class="caption"><h3>' + model.getDish(menu[i].id).name + '</h3></div></a></div>';
	}

	picBox.html(string);

}
 