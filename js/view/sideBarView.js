

var SideBarView = function (container, model) 
{
    model.addObserver(this);
   
    // getting a reference to the buttons:
    this.minusButton = container.find("#minusGuest");
    this.plusButton  = container.find("#plusGuest");    
    this.confirmDinnerButton = container.find("#confirm_dinner_button");
    
    this.update = function()
    {
        var nGuests = container.find("#nGuests");

        nGuests.html(model.getNumberOfGuests());

        var selectedDishes = model.getSelectedDishes();

        // get the div to add the dishes's name and cost
        var dishNameCostDiv = container.find("#dish_cost");
        dishNameCostDiv.html("");
        
        //console.log(selectedDishes);

        for(var i =0; i< selectedDishes.length; i++)
        {
            // id='dish_name_'"+i+"
            dishNameCostDiv.append("<div class = 'row'> <div  class='col-md-6 noPadding' style='float:left' > <p style='text-align:left'>"+ model.getDish(selectedDishes[i].id).name + " </p> </div>" + "<div class='col-md-6'> <p style='text-align:right'>"+ model.getDishPrice(selectedDishes[i].id)*model.getNumberOfGuests() + " SEK</p> </div> </div>");

            //id='dish_cost_'"+i+"
            //dishNameCostDiv.append("<div class='col-md-6'> <p style='text-align:right'>"+ model.getDishPrice(selectedDishes[i].id) + " SEK</p> </div> </div>");        
        }        
       
        // Adding the total cost of the dish
        container.find("#total_cost").html( model.getTotalMenuPrice() + " SEK");
    }
    
    this.update();
}








