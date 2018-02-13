

var HomeController = function(view, model, pagesDisplayer) 
{
    // When the user clicks on the 'create new dinner' button
	view.create_new_dinner_button.click(function(e)
    {
        //console.log("Clicked on the create new dinner button !");
		pagesDisplayer.showSelectDishesPage();
	});
}


