

var SearchView = function (container, model){

   var searchBar = container.find("#searchBar");
   
   searchBar.append("HELLO BABY");

   var inputField = document.createElement("INPUT");
   inputField.setAttribute("type", "text");
   inputField.setAttribute("class", "form-control");

   searchBar.prepend(inputField);
   
   
   
   
   // FOOD IMAGES GRID ----------------------------------------------
   this.imageGrid = container.find("#dishImages");
   
   var dishMenu = model.getFullMenu();
   
    //Show full dish list
   for (i=0;i<dishMenu.length;i++){
      this.imageGrid.append("<a href='#' data-id='" + dishMenu[i].id +"' class='nav-to-dish'> <div style='width:200px; float: left; margin-left: 10px;'><img src='images/"+dishMenu[i].image+"' style='width:200px; height: 200px'><p>"+dishMenu[i].name+"</p></div> </a>");
   }   
   // ---------------------------------------------------------------
   
}

