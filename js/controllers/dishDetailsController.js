



var DishDetailsController = function(view, model, pagesDisplayer) 
{
  
    // When the user clicks on the 'back to search' button
	view.backToSearchButton.click(function(e)
    {
		pagesDisplayer.showSelectDishesPage();
	});   

   
    // When the user clicks on the 'back to search' button
	view.addToMenuButton.click(function(e)
    {       
       console.log("Hello");
       
       // Add the dish 
       model.addDishToMenu( view.dishId  );	
       
       // Go back to the SelectDishPage
       pagesDisplayer.showSelectDishesPage();
	});   
   
   

}

