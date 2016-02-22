//Controller Object constructor
var Controller1 = function(view, model ) {

$("#header").hide();
$("#view2").hide();
$("#view3").hide();
$("#view4").hide();
$("#view5").hide();
$("#view6").hide();

  view.welcomeButton.click(function(){
	$("#view1").hide();
	$("#header").show();
	$("#view2").show();
	$("#view3").show();
  });

}