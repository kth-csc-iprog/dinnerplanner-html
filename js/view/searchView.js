

var SearchView = function (container, model){


   
   
   this.searchBar = container.find("#searchBar");
   

   

   // FOOD IMAGES GRID ----------------------------------------------
   this.imageGrid = container.find("#dishImages");
   
   this.selectableDishes = function(dishes, inputDiv)
   {
      inputDiv.html("");
      
      //Show full dish list
      //for (i=0;i<dishMenu.length;i++){
      for (i=0;i<dishes.length;i++){
   
      var htmlString ="<a href='#' data-id='" + dishes[i].id +"' class='nav-to-dish'> <div style='width:200px; float: left; margin-left: 10px;'><img src='images/"+dishes[i].image+"' style='width:200px; height: 200px'><p>"+dishes[i].name+"</p></div> </a>";
         inputDiv.append(htmlString);
      }         
   }
   
   var dishMenu = model.getFullMenu();
   
   
   this.selectableDishes(dishMenu,  this.imageGrid);
   // ---------------------------------------------------------------

  
}

