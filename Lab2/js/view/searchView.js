var SearchView = function (container, model) {
	this.container = container;
	this.searchButton = container.find("#searchButton");
	this.textInput = container.find("#keywords"); 
	


	//load view
	this.loadView = function() {
		var menu = menu;
		var string = '';
			var picBox = container.find("#template");

			//console.log(menu);
		for(i in menu){
		string += '<div class="col-md-4 col-sm-6"><a href="#" class="thumbnail"><img src="images/' + menu[i].image + ' " ><div class="caption"><h3>' + menu[i].name + '</h3></div></a></div>';
		}
		picBox.html(string);
	}
		
		

	// load/update view.
	/*this.loadView();*/
	//attach as listener
	model.addObserver(this);
	console.log(model.observers);
}