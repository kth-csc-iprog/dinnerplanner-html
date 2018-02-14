var OverviewView = function (container, model) {

	this.container = container;
	this.model = model;

	this.backButton = container.find("#back");
	this.printButton = container.find("#print");


	var header = container.find("#overviewHeader");
	var pictures = container.find("#pictures");
	var total = container.find("#totSum");

	




	//load view
	this.loadView = function() {
		var nr= model.getNumberOfGuests();
		var string = '<h2>My dinner: '+ nr +' people</h2>';
		var menu = model.getFullMenu();
		header.html(string);

		sum =0;
		HTMLPic= "";
		for(i in menu){
			var dishPrice = 0;
			for(n in menu[i].ingredients){
				dishPrice += menu[i].ingredients[n].price*nr;
			}
			HTMLPic += '<div class="col-sm-3"><div class="thumbnail margin1" id="' + menu[i].id + '"><img src="images/' + menu[i].image + ' " ><div class="caption"><h3>' + menu[i].name + '</h3></div></div><h4 class="pull-right margin"> '+ dishPrice +' SEK </h4></div>';
			
			sum += dishPrice;
		}
		pictures.html(HTMLPic);
		total.html(sum);

		
	}
		

	// load/update view.
	this.loadView();
	//attach as listener
	model.addObserver(this);

	this.updateView = function() {
		console.log("testar ny funktion - overview");
	}
	
}
 
