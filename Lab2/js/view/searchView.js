var SearchView = function (container, model) {
	this.container = container;
	this.searchButton = container.find("#searchButton"); // knappen ska bara göra loadView(), i den funktionen finns resten av isntruktionerna
	var textInput = container.find("#keywords"); //document.getElementById("keywords"); //
	this.testButton = container.find("#test");


	//load view
	this.loadView = function() {

		//var type = hämta type 
		var type = container.find("#selectOption option:selected").val();
		//console.log(type);
		//var keywords = Hämta filter
		var filter = document.getElementById("keywords").value;

		var menu = model.getAllDishes(type, filter); // stoppain filter och type i funktionen. 
		var string = '';
		var picBox = container.find("#template");

		//lägg in rätterna
		for(i in menu){
			string += '<div class="col-md-4 col-sm-6"><div class="thumbnail" id="' + menu[i].id + '"><img src="images/' + menu[i].image + ' " ><div class="caption"><h3>' + menu[i].name + '</h3></div></div></div>';
		}
		picBox.html(string);
		textInput.value = ""; // funkar inte. nollställer keywordsfönstret när man tryckt sök. 

	}

	this.update = function(args) {
		var viewArgs = args;
		switch(viewArgs) {
			case "toRecipe":
			this.hide();
			break
			default:
			break
		}

	}
		
		

	// load/update view.
	this.loadView();
	//attach as listener
	model.addObserver(this);
}