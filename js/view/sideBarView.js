

var SideBarView = function (container, model) 
{
    var nGuests = container.find("#nGuests");
    
    nGuests.html(model.getNumberOfGuests());
    //nGuests.html("Testing :)");

    
    var selectedDishes = model.getSelectedDishes();
    
    // get the div to add the dishes's name and cost
    var dishNameCostDiv = container.find("#dish_cost");
    
    
    
    for(var i =0; i< selectedDishes.length; i++)
    {
        // id='dish_name_'"+i+"
        dishNameCostDiv.append("<div class = 'row'> <div  class='col-md-6 noPadding' style='float:left' > <p style='text-align:left'>"+ model.getDish(selectedDishes[i].id).name + " </p> </div>" + "<div class='col-md-6'> <p style='text-align:right'>"+ model.getDishPrice(selectedDishes[i].id) + " SEK</p> </div> </div>");
    
        //id='dish_cost_'"+i+"
        //dishNameCostDiv.append("<div class='col-md-6'> <p style='text-align:right'>"+ model.getDishPrice(selectedDishes[i].id) + " SEK</p> </div> </div>");        
    }
    
}








