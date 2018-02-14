



var DinnerSummaryController = function(view, model, pagesDisplayer) 
{ 
    // When the user clicks on the 'return to previous page' button
	view.return_to_previous_page_button.click(function(e)
    {
		pagesDisplayer.showSelectDishesPage();
	});  
   

    // When the user clicks on the 'print full recipe' button
	view.print_full_recipe_button.click(function(e)
    {
		pagesDisplayer.showFullReceipe();
	});     
}


