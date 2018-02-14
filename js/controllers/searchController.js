

var SearchController = function(view, model, pagesDisplayer) 
{
   
   view.imageGrid.on("click", ".nav-to-dish", function(e){
      e.preventDefault();
      pagesDisplayer.showDishDetails( $(this).data("id") ); 
   });
   
   
   
   view.searchBar.on("change", "#DishType", function()
   {
      var type = $(this).val();
      
      if(type == "all")
      {
         view.selectableDishes(model.getAllDishes(), view.imageGrid);
      }
      else
      {
         view.selectableDishes(model.getAllDishes(type, null), view.imageGrid);         
      }
   });
   
   
   view.searchBar.on("input", "#SearchField", function()
   {
      console.log("Hello");
      view.selectableDishes(model.getAllDishes(null, $(this).val()), view.imageGrid);
   });
}