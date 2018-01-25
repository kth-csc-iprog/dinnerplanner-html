var DishDetailView = function (container, model) {

	// var tag = "'<img id='icecream.jpg' src=/images/" + model.getDish(200).image +">'";
	// var dishTitle = container.find('#dishTitle');
	// var dishImage = container.find('#dishImage');
	var dishIngredients = container.find('#dishIngredients');


	// dishTitle.append(model.getDish(200).name);
	// dishImage.append(tag);
	dishIngredients.html(model.getDish(200).ingredients[0]);

	dishIngredients.append("<div class='row'><div class='col-xs-6'>"
			+"<h3>" 
		 	+ model.getDish(200).name 
		 	+ "</h3>"
			+ "<img src=/images/"
		 	+ model.getDish(200).image 
		 	+"></img>"
		 	+ "<br>" + model.getDish(200).description
		 	+"</div>"
		 	+"<div class='col-xs-6'>"
		 	+"<p>"
		 	+ "<h3>Ingredient List</h3></br>"
		 	+ "Ingredient: " + model.getDish(200).ingredients[0].name +"</br>"
		 	+ "Quantity: " + model.getDish(200).ingredients[0].quantity +"</br>"
		 	+ "Unit: " + model.getDish(200).ingredients[0].unit +"</br>"
		 	+ "Price: " + model.getDish(200).ingredients[0].price +"</br>"
		 	+ "</p></div>"
		 	+"<div class='col-xs-6'>" 
		 	
		 	+ "</div></div>");
	// dinnerModelTest.html(model.getAllIngredients());

	// $('#theDiv').prepend('<img id="icecream.jpg" src=/images/"theImg.png" />')

	// $('body')
	// .append('my DOM manupulation skills dont seem like a big deal when using jquery')
	// .css('color', 'red').addClass('myclass');

}