//Controller Object constructor
var Controller1 = function(view, model ) {
  
  view.welcomeButton.click(function(){
	$("#view1").hide();
	$("#header").show();
	$("#view2").show();
	$("#view3").show();
  });

}