var StateController = function(view1, view2, view3, view4, view5, view6, view7) {

	var homeView = view1;
	var sideView = view2;
	var searchView = view3;
	var headerView = view4;
	var oneDishView = view5;
	var overviewView = view6;
	var printView = view7;

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
	var oneDish = function(){
		sideView.container.show();
		searchView.container.hide();
		headerView.container.show();
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


		
	


	startDinner();
	searchView.updateView();
	
}