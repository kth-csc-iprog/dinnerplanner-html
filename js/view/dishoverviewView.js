var DishOverviewView = function (container, model) {

	var attendance = "<strong>" +(model.getNumberOfGuests()) + " </strong>people";
	var dinnerAttendance = container.find('#dinnerAttendance');
	var chosenDishes = container.find('#chosenDishes');
	// var chosenDish = container.find('#chosenDish');

	dinnerAttendance.append(attendance);
<<<<<<< HEAD
	for(var i = 1; i < 4; i++ ){
		chosenDishes.append("'<img id='icecream.jpg' src=/images/" + model.getDish(i).image +">'<p>" + model.getDish(i).name + "</p>");

	}
	 // for (var i = 0; i < this.menu.length; i++) {
  //     var existingDish = this.getDish(this.menu[i]);

	// chosenDish.addClass('dishview');
}
=======

	var addedDishes = container.find('#addedDishes');

	addedDishes.append(model.getDish(1).name);
}
>>>>>>> 332a4624dfccb4ea35fe26830c90d5dbaf617d47
