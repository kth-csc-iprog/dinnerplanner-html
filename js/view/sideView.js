var SideView = function (container, model) {

    // +/- GUESTS
    var guests = model.getNumberOfGuests()
  	var numberOfGuests = container.find('#numberOfGuests');
  	var plusGuest = container.find('#plusGuest');
  	var minusGuest = container.find('#minusGuest');


  	plusGuest.click(function(){
  		guests ++;
  		numberOfGuests.html(guests);
  	})

  	minusGuest.click(function(){
  		if (guests>0) {
  			guests --;
  			numberOfGuests.html(guests);
  		}
  	})

    numberOfGuests.html(guests);

      // CHOSEN DISHES

}
