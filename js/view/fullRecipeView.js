


var FullReceipeView = function (container, model){
   
   var nGuests = model.getNumberOfGuests();

   // Filling the number of people
   container.find("#nGuests").html(nGuests + " People");
   
   
   
   var receipesContainer = container.find("#receipesDiv");
   
   
   var dishesSelected = model.getSelectedDishes();
   
   for(var i=0; i< dishesSelected.length; i++)
   {
      container.append("<div class='row'> <div class='col-md-3'> <img src='images/" + dishesSelected[i].image + "' style='width:150px; height: 150px'> </div> <div class='col-md-4 bg-primary'> <h5>" + dishesSelected[i].name + "</h5> <p>" + dishesSelected[i].description + "</p> </div>  <div class='col-md-5 bg-success'> <h5>Preperations</h5> <p>" + dishesSelected[i].description + "</p> </div> </div>");
   }
   
   
   // Getting a reference to the "return to previous page" button 
   this.return_to_previous_page_button = container.find("#returnToPreviousPageButton");
}



















