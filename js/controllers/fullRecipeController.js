

var FullReceipeController = function(view, model, pagesDisplayer) 
{   

    // When the user clicks on the 'return to previous page' button
	view.return_to_previous_page_button.click(function(e)
    {
		pagesDisplayer.showDinnerSummary();
	});   
   
}