	
var SearchViewController = function(view, model) {
	this.view = view;
	this.model = model;

	//var searchButton = view.container.find("#searchButton");

	view.searchButton.click(function() {
		// hämta input från rutan
		var filter = document.getElementById("keywords").value;
		console.log(filter);
		// hämta input från listan
		var type = view.container.find("#selectOption option:selected").val();
		console.log(type);
		// mha input filtrera vad som ska visas
		var menu = model.getAllDishes(type, filter);
		console.log(menu);
		// visa de rätter som gäller

/*test*/
		/*var menu = menu;

		var string = '';
  		var picBox = view.container.find("#template");

  		//console.log(menu);
		for(i in menu){
		string += '<div class="col-md-4 col-sm-6"><a href="#" class="thumbnail"><img src="images/' + menu[i].image + ' " ><div class="caption"><h3>' + menu[i].name + '</h3></div></a></div>';
	}

	picBox.html(string);

	});*/

});
}