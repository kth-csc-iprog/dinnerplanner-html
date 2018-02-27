var PrintView = function (container, model) {
	this.container = container;
	this.model = model;

	


	var print = container.find("#printDish")
	var header = container.find("#printHeader")



	//load view
	this.loadView = function() {
		
		var nr = model.getNumberOfGuests();
		string = '<h2>My dinner: '+ nr +' people</h2>';
		header.html(string);

		var string = '';
		menu = model.getFullMenu()


		for(i in menu){
			string += '<div class="row"><div class="col-sm-2 col-xs-12 margin well"><img src="images/' + menu[i].image +'"></img>'+
    '</div><!--column end--><div class="col-sm-4 col-xs-12"><h3>' + menu[i].name +
    '</h3></div><!--column end--><div class="col-sm-5 col-xs-12 text well"><h3>Preparation</h3><p>' + menu[i].description + 
    '</p></div><!--column end--></div><!--row end-->';
   ;
		
		}
		print.html(string);

	}
		
	

	// load/update view.
	this.loadView();
	//attach as listener
	model.addObserver(this);

	this.updateView = function() {
		console.log("testar ny funktion - print");
	}
}