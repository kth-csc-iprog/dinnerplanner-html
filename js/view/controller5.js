//Controller Object constructor
var Controller5 = function(view, model ) {

	view.printButton.click(function(){
		$("#view5").hide();
		$("#view6").show();
	});

	view.goBackButton.click(function() {
		$("#view5").hide();
		$("#view3").show();
		$("#view2").show();
	})
}