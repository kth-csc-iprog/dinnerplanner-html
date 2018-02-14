

var SearchController = function(view, model, pagesDisplayer) 
{
   
   view.imageGrid.on("click", ".nav-to-dish", function(e){
      e.preventDefault();
      pagesDisplayer.showDishDetails( $(this).data("id") ); 
   });
   
}