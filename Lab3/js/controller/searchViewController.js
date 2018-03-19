
var SearchViewController = function(view, model, sControl) {
	var view = view;
	var sControl = sControl;
	var dishesView = new Array();
	//var textInput = view.container.find("#keywords"); //document.getElementById("keywords"); //
	var dishesView = view.container.find(".thumbnail");
	
	
	view.searchButton.click(function() {
		view.loadView();
	});

	view.picBox.on("click", ".thumbnail", function(){
		model.selectDishRecipe(this.id);
		
		//textInput.value = ""; // nollställer keywordsfönstret när man tryckt sök. 
		sControl.oneDish();	
	});	
}