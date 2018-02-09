var StateController = function(view1, view2, view3, view4) {

	var homeView = view1;
	var sideView = view2;
	var searchView = view3;
	var headerView = view4;

	var startDinner = function() {
		homeView.startButton.click(function() {
		//console.log("funkar det");

		homeView.container.hide();
		headerView.container.show();
		sideView.container.show();
		searchView.container.show();




		});
	}
	/*var Search = function() {
		searchView.searchButton.click(function() {

		//ladda om pictures anpassad till search kriterierna. 
		

	
	}
	var oneDish = function(){
		});
	}*/

	startDinner();
	//Search();

	
}