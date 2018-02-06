var HomeViewController = function(view, model) {
	view.startButton.click(function() {
		console.log("The button was clicked");
		view.homeView.hide();
	});
}