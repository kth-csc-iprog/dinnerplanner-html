var StateController = function(view1, view2, view3, view4) {

	var homeView = view1;
	var sideView = view2;
	var searchView = view3;
	var headerView = view4;

	var startDinner = function() {
		homeView.startButton.click(function() {
		homeView.container.hide();
		headerView.container.show();
		sideView.container.show();
		searchView.container.show();
		});
	}


	startDinner();

	
}