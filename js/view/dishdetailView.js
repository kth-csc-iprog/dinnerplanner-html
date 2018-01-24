var DishDetailView = function (container, model) {

	var tag = "'<img id='icecream.jpg' src=/images/" + model.getDish(200).image +">'";
	var dishTitle = container.find('#dishTitle');
	var dishImage = container.find('#dishImage');
	var dishIngredients = container.find('#dishIngredients');


	dishTitle.append(model.getDish(200).name);
	dishImage.append(tag);
	dishIngredients.html(model.getDish(200).ingredients[0]);
	// dinnerModelTest.html(model.getAllIngredients());

	// $('#theDiv').prepend('<img id="icecream.jpg" src=/images/"theImg.png" />')

	// $('body')
	// .append('my DOM manupulation skills dont seem like a big deal when using jquery')
	// .css('color', 'red').addClass('myclass');

}