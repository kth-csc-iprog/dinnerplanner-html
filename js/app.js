$(function () {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var selectDishView = new ExampleView($("#dishContent"), model);
	var dishDetailView = new dishDetails($("#dishDescription"), model);
	var ingredientsTableView = new ingredientsTable($("#ingredientsTable"), model);
	var pendingMenuView = new pendingMenu($("#pendingMenu"), model);
	var dinnerOverviewView = new dinnerOverview($("#dinnerOverview"), model);
	var dinnerRecipiesView = new dinnerRecipies($("#dinnerRecipies"), model);

});