$(function () {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var homeController = new HomeController($("#startPage"), model);
	
	var selectDishView = new dishContentView($("#dishContent"), model);
	var selectDishController = new SelectDishController($("#dishContent"), model);
	
	var dishDetailView = new dishDetails($("#dishDescription"), model);
	var dishDetailController = new DishDetailController($("#dishDescription"), model);
	
	var ingredientsTableView = new ingredientsTable($("#ingredientsTable"), model);
	var ingredientsTableController = new IngredientsTableController($("#ingredientsTable"), model);
	
	var pendingMenuView = new pendingMenu($("#pendingMenu"), model);
	var pendingMenuController = new PendingMenuController($("#pendingMenu"), model);
	
	var dinnerOverviewView = new dinnerOverview($("#dinnerOverview"), model);
	var dinnerOverviewController = new DinnerOverviewController($("#dinnerOverview"), model);
	
	var dinnerRecipiesView = new dinnerRecipies($("#dinnerRecipies"), model);
	var dinnerRecipiesController = new DinnerRecipiesController($("#dinnerRecipies"), model);
	
	$("#leftPendingMenu").addClass("hide");
	$("#selectDishView").addClass("hide");
	$("#dishDetailsView").addClass("hide");
	$("#dinnerOverviewPage").addClass("hide");
	$("#dinnerPreparationPage").addClass("hide");
	$("#ingredientsTable").addClass("hide");
});