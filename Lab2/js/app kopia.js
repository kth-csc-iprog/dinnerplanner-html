// Visa söksidan. 
function showSelectDish() {
	$("#homeView").hide();
	$("#header").show();
	$("#sideView").show();	
	$("#searchView").show();
	$("#mainPic").show();
}

$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of our views

	// 1. homeView
	var homeView = new HomeView($("#homeView"), model);

	// 2.sideView
	var sideView = new SideView($("#sideView"), model);

	// 3.searchView (inkl maträtterna nedanför)
	var mainPic = new MainPic($("#mainPic"), model);

	// 4. oneDishView (inkl div med recept som uppdateras)

	// 5. fullMenuView

	// 6. printView


	var searchView =  new SearchView($("#searchView"), model);
	//var searchViewController = new SearchViewController(searchView, model);


	// Controllers
	var homeViewController = new HomeViewController(homeView, model);



	var mainView3 = new MainView3($("#mainView3"), model);
	var mainView5 = new MainView5($("#mainView5"), model);

	// Gömmer allt utom start
	// Man skulle kunna lägga detta inuti varje view, när den initieras så göms den!
	$("#header").hide();
	/*$("#sideView").hide();	*/
	$("#searchView").hide();
	$("#mainPic").hide();




	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});