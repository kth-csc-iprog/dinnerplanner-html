var SearchView = function (container, model) {
	this.container = container;
	this.searchButton = container.find("#searchButton"); // knappen ska bara göra loadView(), i den funktionen finns resten av isntruktionerna
	
	this.picBox = container.find("#template"); //this, app adds eventlistener

	//load view
	this.loadView = function() {

		//var type = hämta type 
		var type = container.find("#selectOption option:selected").val();
	
		//var keywords = Hämta filter
		var filter = document.getElementById("keywords").value;

		var menu = model.getAllDishes(type, filter); // stoppain filter och type i funktionen. 
		var string = '';
		

		//lägg in rätterna
		for(i in menu){
			string += '<div class="col-md-3 col-sm-4"><div class="thumbnail picture" id="' + menu[i].id + ' "><img src="images/' + menu[i].image + ' " ><div class="caption"><h3>' + menu[i].name + '</h3></div></div></div>';
		}
		this.picBox.html(string);
		

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