//Controller Object constructor
var HeaderController = function(view, model ) {
	view.homeButton.click(function(){
		$("#header").hide();
		$("#view2").hide();
		$("#view3").hide();
		$("#view4").hide();
		$("#view5").hide();
		$("#view6").hide();
		$("#view1").show();		
	});
}