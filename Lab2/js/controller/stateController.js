var StateController = function(view1, view2, view3) {

	var homeView = view1;
	var sideView = view2;
	var searchView = view3;

	var startDinner = function(view1, view2, view3) {
		homeView.startButton.click(function() {
		console.log("funkar det");
		

		console.log(this.homeView);
		homeView.container.hide();
		sideView.container.show();
		searchView.container.show();
	});
	}

	startDinner(homeView, sideView, searchView);
	
}