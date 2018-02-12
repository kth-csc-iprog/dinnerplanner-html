var SideView = function (container, model) {

	this.container = container;
	this.model = model;
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	var numberOfGuests = container.find("#numberOfGuests");
	var table = container.find("#dinnerTable");
	var summa = container.find("#sum");
	var Summa = container.find("#summa");




	//load view
	this.loadView = function() {

		numberOfGuests.html(model.getNumberOfGuests());

		var menu = model.getFullMenu(); // stoppain filter och type i funktionen. 
		var string = '';
		var sum = 0;


		//lägg in rätterna från vald menu och räknar ut priset av varje rätt samt totalt
		for(i in menu){
			var dishPrice = 0;
			for(n in menu[i].ingredients){
				dishPrice += menu[i].ingredients[n].price
			}
			sum += dishPrice;

			string += '<tr><td>' + menu[i].name + '</td><td>' + dishPrice + '</td></tr>';
		}
		console.log(menu);

		
		table.html(string);
		summa.html(sum);
		Summa.html(sum);

	


		//model.setNumberOfGuests(guests);
	
		}
		

	// load/update view.
	this.loadView();
	//attach as listener
	model.addObserver(this);
	
}
 
