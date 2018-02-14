// Visa söksidan. 
/*function showSelectDish() {
	$("#homeView").hide();
	$("#header").show();
	$("#sideView").show();	
	$("#searchView").show();
	$("#mainPic").show();
}*/

$(function() {

	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of our views

	// 1. homeView
	var homeView = new HomeView($("#homeView"), model);

	//  headerView
	var headerView = new HeaderView($("#header"), model);
	// 2.sideView
	var sideView = new SideView($("#sideView"), model);
	
	// 3.searchView (inkl maträtterna nedanför)
	var searchView =  new SearchView($("#searchView"), model);

	// 4. oneDishView (inkl div med recept som uppdateras)
	var oneDishView = new OneDishView($("#oneDishView"), model);

	// 5. fullMenuView -overviewView
	var overviewView = new OverviewView($("#overview"), model);


	// 6. printView
	var printView = new PrintView($("#printView"), model);


	// Controllers
	//var stateController = new StateController(homeView, sideView, searchView, header, oneDishView, overviewView, printView);
	//var homeViewController = new HomeViewController(homeView, model);
	var searchViewController = new SearchViewController(searchView, model, this); 

	var sideViewController = new SideViewController(sideView, model, this);

	var oneDishViewController = new OneDishViewController(oneDishView, model, this);

	var overviewViewController = new OverviewViewController(overviewView, model, this); 

	var printViewController = new PrintViewController(printView, model, this);


	//------------------------

	var startDinner = function() {
		homeView.startButton.click(function() {
			homeView.container.hide();
			sideView.container.show();
			searchView.container.show()
			headerView.container.show();

			//kunde inte flytta den till searchviewController, då gick det inte att anropa funktionen. 
			//ändra till bilderna som knappar istället för test!
			searchView.testButton.click(function() {
				oneDish();
			});


		});
	}
	this.oneDish = function(){
		sideView.container.show();
		searchView.container.hide();
		headerView.container.show();
		oneDishView.loadView();
		oneDishView.container.show();

		
		oneDishView.backButton.click(function() {
			oneDishView.container.hide();
			searchView.container.show();
		});
		//måste fungera i både oneDish och SearchView
		
	}
	var overview = function(){
		searchView.container.hide();
		oneDishView.container.hide();
		searchView.container.hide();
		sideView.container.hide();
		overviewView.container.show();

		overviewView.backButton.click(function() {
			overviewView.container.hide();
			searchView.container.show();
			sideView.container.show();

		});
		overviewView.printButton.click(function(){
			printRecipe();	

		});
	}
	var printRecipe = function(){
		overviewView.container.hide();
		printView.container.show();
		
		printView.BackButton.click(function() {
			printView.container.hide();
			sideView.container.show();
			searchView.container.show();

		});
	}

	sideView.confirmButton.click(function(){
			overview();
		});

	// Gömmer allt utom start
	$("#header").hide();
	$("#sideView").hide();	
	$("#searchView").hide();
	$("#oneDishView").hide();
	$("#overview").hide();
	$("#printView").hide();

	startDinner();






	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});