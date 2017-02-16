//Controller Object constructor
var Controller4 = function(view, model ) {

	view.backButton.click(function(){
		$("#header").show();
		$("#view2").show();
		$("#view3").show();
		$("#view4").hide();
	});

	view.confirmButton.click(function(){
		model.addDishToMenu(1) //HÄR SKA ID SKICKAS IN
		$("#confirm_dinner").prop("disabled",false); //TO ENABLE "CONFIRM DINNER"
	});

}