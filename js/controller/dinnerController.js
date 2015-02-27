var HomeController = function(view, model ) {

$(document).on('click', '#new-dinner', function(){
	$("#startPage").addClass("hide");   // # para id, punto para clases
  	$("#selectDishView").removeClass("hide");
  	$("#leftPendingMenu").removeClass("hide");
});

}

var SelectDishController = function(view, model) {
	
	$(document).on('click', '.callDishDetails', function() {
  		var dishID = $(this).data("id");
  		model.setDishDetailID(dishID);
  		//console.log(dishID);
  		$("#dishDetailsView").removeClass("hide");
  		$("#ingredientsTable").removeClass("hide");
  		$("#selectDishView").addClass("hide");
  		
	});
}

var DishDetailController = function(view, model) {
	
	$(document).on('click', '#backFromDetails', function() {
  		model.setPending(0);
      $("#dishDetailsView").addClass("hide");
  		$("#ingredientsTable").addClass("hide");
  		$("#selectDishView").removeClass("hide");
	});
}
var IngredientsTableController = function(view, model) {
  
  $(document).on('click', '#addDishButton', function() {
      model.addDishToMenu(model.getDishDetailID());
      model.setPending(0);
  });
}


var PendingMenuController = function(view, model) {
	
	$(document).on('click', '#callDinnerOverview', function() {
  		$("#dishDetailsView").addClass("hide");
  		$("#selectDishView").addClass("hide");
  		$("#leftPendingMenu").addClass("hide");
  		$("#ingredientsTable").addClass("hide");
  		$("#dinnerOverviewPage").removeClass("hide");
      $("#dinnerOverview").removeClass("hide");
      
  		
	});
	$(document).on('change', '#peopleInput', function() {
  		model.setNumberOfGuests($("#peopleInput").val());
  		//console.log(model.getNumberOfGuests());
  		
	});
}

var DinnerOverviewController = function(view, model) {
	
	$(document).on('click', '#callDinnerPreparationPage', function() {
  		$("#dinnerOverviewPage").addClass("hide");
  		$("#dinnerPreparationPage").removeClass("hide");
  		
	});
	$(document).on('click', '#backFromOverview', function() {
  		$("#dinnerOverviewPage").addClass("hide");
  		$("#selectDishView").removeClass("hide");
  		$("#leftPendingMenu").removeClass("hide");
	});
}

var DinnerRecipiesController = function(view, model) {
	
	$(document).on('click', '#backFromRecipes', function() {
  		$("#dinnerOverviewPage").removeClass("hide");
  		$("#dinnerPreparationPage").addClass("hide");
  		
	});
}