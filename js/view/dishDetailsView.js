

var DishDetailsView = function (container, model, _dishId) 
{     
    var nGuests = model.getNumberOfGuests();
    
    //get the <h1 id="dish_name">
    var dName = container.find("#dish_name");
    
    
    this.dishId = _dishId;
    // Get the dish
    var selectedDish = model.getDish(this.dishId); 
   
    dName.html(selectedDish.name);
   

    var dishPhoto = container.find("#dish_image");
    dishPhoto.attr("src", "images/" + selectedDish.image);   


   
    var dishDescription = container.find("#dishDescription");
    dishDescription.html(selectedDish.description);

   
    var preparation = container.find("#preparation");
    preparation.html(selectedDish.description);
    
    
    this.backToSearchButton = container.find("#back_to_search");
    this.addToMenuButton = container.find("#add_to_menu");
   
   
    
   
   
   
    // Table ------------------------------------------------------------------------------------------------------
    // Ingredients for X people
    var tableTitle = container.find("#tableTitle");
    tableTitle.html("Ingredients for " + nGuests + " people");
    
    //var ingredients = selectedDishes[0].ingredients;
    var ingredients = selectedDish.ingredients;

   
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
        htmlToBeAdded += " <div class='col-xs-3 text-right'> <p>" + parseInt(ingredients[i].price)*nGuests + "</p>  </div> "
    
       
        // Close the row div
        htmlToBeAdded += "</div>"

        tableItens.prepend(htmlToBeAdded);        
    }
    
    
    var total = container.find("#totalPrice");
    total.html(model.getDishPrice(selectedDish.id)*nGuests);
   // ------------------------------------------------------------------------------------------------------------
}
