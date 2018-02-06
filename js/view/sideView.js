var SideView = function (container, model) {

    // +/- GUESTS

  	var numberOfGuests = container.find('#numberOfGuests');
  	this.plusGuest = container.find('#plusGuest');
  	this.minusGuest = container.find('#minusGuest');


  	plusGuest.click(function(){
  		model.getNumberOfGuests() += 1;
      return model.getNumberOfGuests();
  	})

  	minusGuest.click(function(){
  		if (model.getNumberOfGuests()>0) {
  			model.getNumberOfGuests() -= 1;
  			return model.getNumberOfGuests();
  		}
  	})
  	numberOfGuests.html(model.getNumberOfGuests());



    // CHOSEN DISHES





}
