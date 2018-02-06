var MenuView = function (container, model) {

	// ATTENDANCE
	var dinnerAttendance = container.find('#dinnerAttendance');
	var attendance = "<strong>" +(model.getNumberOfGuests()) + " </strong>people"
	dinnerAttendance.append(attendance);

	// CHOSENDISHES
	var chosenDishes = container.find('#chosenDishes');
	for(var i = 1; i < 4; i++ ){
		chosenDishes.append("<div class='col-xs-2'><img src=/images/"
													+model.getDish(i).image
													+"><p>"
													+ model.getDish(i).name
													+ "</p></img></div>");
	}

	var addedDishes = container.find('#addedDishes');
	addedDishes.append(model.getDish(1).name);
}
