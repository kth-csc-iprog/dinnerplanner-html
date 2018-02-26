var SideView = function (container, model) {

	this.container = container;
	this.model = model;

	this.confirmButton = container.find("#confirm");

	var numberOfGuests = container.find("#numberOfGuests");
	this.table = container.find("#dinnerTable");
	var summa = container.find("#sum");
	var Summa = container.find("#summa");




	//load view
	this.loadView = function() {
		nrOfGuests = model.getNumberOfGuests();
		numberOfGuests.html(nrOfGuests);

		var menu = model.getFullMenu(); // stoppain filter och type i funktionen. 
		var string = '';
		var sum = 0;
		if (menu === undefined || menu.length == 0){
			this.confirmButton.prop('disabled', true);
		}
		else{
			this.confirmButton.prop('disabled', false);
		}
		//lägg in rätterna från vald menu och räknar ut priset av varje rätt samt totalt
		for(i in menu){
			var dishPrice = 0;
			for(n in menu[i].ingredients){
				dishPrice += menu[i].ingredients[n].price*nrOfGuests;
			}
			sum += dishPrice;

			string += '<tr><td>' + menu[i].name + '</td><td>' + dishPrice + '</td><td> '+ 
			'<button type="button" id="' + menu[i].id + '" " class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></td></tr>';
		}

		
		this.table.html(string);
		summa.html(sum);
		Summa.html(sum);
	
	}
	
		

	// load/update view.
	this.loadView();


	//attach as listener
	model.addObserver(this);
	this.updateView = function(args) {
		switch(args) {
		    case "guestsChanged":
				this.loadView();
		        break;
		     case "newDishAdded":
				this.loadView();
		        break;
		     case "removedDish":
				this.loadView();
		        break;
		        
		    default:
		    	break;
		}
	}

	
}
 
