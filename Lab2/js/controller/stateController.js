var StateController = function(view1, view2, view3, view4, view5) {

	var homeView = view1;
	var sideView = view2;
	var searchView = view3;
	var headerView = view4;
	var pictureView = view5;

	var startDinner = function() {
		homeView.startButton.click(function() {
		//console.log("funkar det");

		homeView.container.hide();
		headerView.container.show();
		sideView.container.show();
		searchView.container.show();




		});
	}
	var Search = function() {
		searchView.searchButton.click(function() {
		//var element = searchView.find("#selectOption option:selected").val();
		//console.log(element);
		pictureView.container.show();




		});
	}

	startDinner();
	Search();

	
}