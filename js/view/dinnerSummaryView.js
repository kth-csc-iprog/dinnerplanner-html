

var DinnerSummaryView = function (container, model) 
{
   console.log("Dinner Summary View");
   
   var nGuests = container.find("#nGuests");
   nGuests.html(model.getNumberOfGuests() + " People");
   
   
   var dishesListDiv = container.find("#dishes_list");
   
   var dishesSelected = model.getSelectedDishes();
   
   for(var i=0; i< dishesSelected.length; i++)
   {
      
      dishesListDiv.append("<div style='width:200px; float: left; margin-left: 10px;'> <img src='images/" + dishesSelected[i].image + "'  style='width:200px; height: 200px'> <p>" + model.getDishPrice(dishesSelected[i].id) + " SEK </p> ");
   }
   
   
   var totalPrice = container.find("#total_price");
   
   totalPrice.html("Total Price: "+ model.getTotalMenuPrice());
   
   
   
    this.return_to_previous_page_button = container.find("#return_to_previous_page_button");
   
}

