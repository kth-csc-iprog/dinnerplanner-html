//Controller Object constructor
var Controller2 = function(view, model ) {
	view.plusButton.click(function(){
	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusButton.click(function(){
	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	$("#confirm_dinner").prop("disabled",true); //TO DISABLE "CONFIRM DINNER"

	view.confirmDinner.click(function(){
		$("#view2").hide();
		$("#view3").hide();
		$("#view4").hide();
		$("#view5").show();		
	});
}