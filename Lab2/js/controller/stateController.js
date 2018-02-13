var StateController = function(view1, view2, view3, view4, view5, view6) {

	var homeView = view1;
	var sideView = view2;
	var searchView = view3;
	var headerView = view4;
	var oneDishView = view5;
	var overview = view6;

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
		sideView.confirmButton.click(function(){
			searchView.container.hide();
			oneDishView.container.hide();
			searchView.container.hide();

			overview.container.show();

		});




		
	}


	startDinner();
	
}