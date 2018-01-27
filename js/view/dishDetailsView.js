

var DishDetailsView = function (container, model) 
{
    var nGuests = model.getNumberOfGuests();
    
    //get the <h1 id="dish_name">
    var dName = container.find("#dish_name");
    
    
    var selectedDishes = model.getSelectedDishes();
    dName.html(selectedDishes[0].name);

    var dishDescription = container.find("#dishDescription");
    dishDescription.html(selectedDishes[0].description);
    
    var preparation = container.find("#preparation");
    preparation.html(selectedDishes[0].description);
    
    
    // Table
    // Ingredients for X people
    var tableTitle = container.find("#tableTitle");
    tableTitle.html("Ingredients for " + nGuests + " people");
    
    var ingredients = selectedDishes[0].ingredients;
    
    var tableItens = container.find("#tableItens"); 
    
    
    for(var i=0; i<ingredients.length; i++)
    {        
        var htmlToBeAdded = "<div class='row'>";
        
        // div for the quantity
        htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].quantity + " " + ingredients[i].unit + "</p>  </div> "
        
        // ingredient's name
        htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].name + "</p>  </div> "

        
        // SEK
        htmlToBeAdded += " <div class='col-xs-3 text-right'> <p> SEK </p>  </div> "
        
        // PRICE 
        htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + ingredients[i].price*nGuests + "</p>  </div> "
        
        // Close the row div
        htmlToBeAdded += "</div>"

        tableItens.prepend(htmlToBeAdded);        
    }
    
    
    var total = container.find("#totalPrice");
    total.html(model.getDishPrice(selectedDishes[0].id)*nGuests);

}
