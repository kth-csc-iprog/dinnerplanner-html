
/*main pictures
gets the pictures and name of the dishes for view2 and 4 */ 
var MainView5 = function (container, model) {
	/*var menu =[1,2,101,102]
	Ska ändras i labb 2, ska kopplas till det sökta. */
	var menu = model.getFullMenu(); 
  	var string = '';
  	var Pictures = container.find("#pictures");
  	var Summa = container.find("#summa");
    var sum = 0;

	for(i in menu){
		for(n in menu[i].ingredients){
        	sum += menu[i].ingredients[n].price;   
		}
		string += '<div class="col-md-4 col-sm-6 caption"><a href="#" class="thumbnail"><img src="images/' + model.getDish(menu[i].id).image + ' " ><div class="caption"><h3>' + model.getDish(menu[i].id).name + '</h3></div></a><h4> ' + sum + ' SEK</h4></div>';
		
	}
	
		
	

	Pictures.html(string);

	Summa.html(sum + ' SEK');

}
 