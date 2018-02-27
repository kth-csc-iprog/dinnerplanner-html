var OverviewView = function (container, model) {

	this.container = container;
	this.model = model;

	var header = container.find("#overviewHeader");
	var pictures = container.find("#pictures");
	var total = container.find("#totSum");


	//load view
	this.loadView = function() {
		var nr= model.getNumberOfGuests();
		var string = '<h2>My dinner: '+ nr +' people</h2>';
		var menu = model.getFullMenu();
		header.html(string);

		var menuPrice =0;
		var HTMLPic= "";

		for(var i = 0; i < menu.length; i++){
			console.log("inne i loopen");
			var dishPrice = parseInt(model.getDishPrice(menu[i]) * nrOfGuests);
			menuPrice += dishPrice;

			HTMLPic += '<div class="col-sm-3"><div class="thumbnail margin1" id="' + menu[i].id + '"><img src="' + menu[i].image + ' " ><div class="caption"><h3>' + menu[i].title + '</h3></div></div><h4 class="pull-right margin"> '+ dishPrice +' SEK </h4></div>';


		}

		pictures.html(HTMLPic);
		total.html(sum);

		
	}
		

	// load/update view.
	//this.loadView();
	//attach as listener
	model.addObserver(this);

	this.updateView = function() {
		this.loadView();
		/*switch(args) {
		    case "guestsChanged":
				this.loadView();
		        break;
		     case "toRecipe":
				this.loadView();
		        break;
		        
		    default:
		    	break;
		}*/
	}
	
}
 
