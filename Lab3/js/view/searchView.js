var SearchView = function (container, model) {
	this.container = container;
	this.searchButton = container.find("#searchButton"); // knappen ska bara göra loadView(), i den funktionen finns resten av isntruktionerna
	this.loadingView = 
	
	this.picBox = container.find("#template"); //this, app adds eventlistener
	var self = this;
	var string = '';

	this.loadView = function() {

		//var type = hämta type 
		var type = container.find("#selectOption option:selected").val();
	
		//var keywords = Hämta filter
		var filter = document.getElementById("keywords").value;

		model.getAllDishes(type, filter, function(data) {
			string = "";
			var menu = data;

			//lägg in rätterna
			for(i in menu){
				string += '<div class="col-md-3 col-sm-4"><div class="thumbnail" id="' + menu[i].id + '"><img src="https://spoonacular.com/recipeImages/' + menu[i].image + '" ><div class="caption"><h3>' + menu[i].title + '</h3></div></div></div>';
			}
		self.picBox.html(string);
		}); 
		
	}
	
	// load/update view.
	this.loadView();

	//attach as listener
	model.addObserver(this);

	this.updateView = function(args) {
		switch(args) {
		    case "newTypeSelected":
				this.loadView();
		        break;
		        
		    default:
		    	break;
		}
	}	 
}