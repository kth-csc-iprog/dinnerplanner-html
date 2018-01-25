
/*main pictures
gets the pictures and name of the dishes for view2 and 4 */ 
var MainPic = function (container, model) {
	var menu =[1,2,101,102]

	/*for(i in menu){
		var picBox = container.find("#template");
		picBox.html('<a href="#" class="thumbnail"><div id="img" ></div><div class="caption"><h3 id="name"></h3></div></a>');
		var dishName = container.find("#name");
		console.log(model.getDish(menu[i]));

		dishName.html(model.getDish(menu[i]).name);

		var dishImg = container.find("#img");
		dishImg.html("<img src='images/" + model.getDish(menu[i]).image + "'/>");
}*/
  	
  var string = '';
	for(i in menu){
		string += '<div class="col-lg-3 col-sm-6"><a href="#" class="thumbnail"><img id="image" src="images/'+ model.getDish(menu[i]).image + ' "></div><div class="caption"><h3></h3>' + model.getDish(menu[i]).name + '</div></a></>'

		/*
		var dishName = container.find("#name");
		console.log(model.getDish(menu[i]));

		dishName.html(model.getDish(menu[i]).name);

		var dishImg = container.find("#img");
		dishImg.html("<img src='images/" + model.getDish(menu[i]).image + "'>");*/

}
	var picBox = container.find("#template");
	picBox.html(string);
}
 