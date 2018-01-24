var DishOverviewView = function (container, model) {

	var attendance = "<strong>" +(model.getNumberOfGuests()) + " </strong>people";
	var dinnerAttendance = container.find('#dinnerAttendance');
	var chosenDishes = container.find('#chosenDishes');
	// var chosenDish = container.find('#chosenDish');

	dinnerAttendance.append(attendance);

	for(var i = 1; i < 4; i++ ){
		chosenDishes.append("<div class='col-xs-2'><img src=/images/" +model.getDish(i).image +"><p>" + model.getDish(i).name + "</p></img></div>");

	}

	var addedDishes = container.find('#addedDishes');
	addedDishes.append(model.getDish(1).name);
}
