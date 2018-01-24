var DishOverviewView = function (container, model) {

	var attendance = "<strong>" +(model.getNumberOfGuests()) + " </strong>people";
	var dinnerAttendance = container.find('#dinnerAttendance');
	dinnerAttendance.append(attendance);
}