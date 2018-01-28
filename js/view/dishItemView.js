var DishItemView = function (container, model){
    //var dishes = container.find("#dishes");
    var dishes = container.find("#AllDishes");

    var dishMenu = model.getFullMenu();


    //Show full dish list
  for (i=0;i<dishMenu.length;i++){
    dishes.append("<div style='width:200px; float: left; margin-left: 10px;'><img src='images/"+dishMenu[i].image+"' style='width:200px; height: 200px'><p>"+dishMenu[i].name+"</p></div>");
  }
    //Show selected dishes in Full Recipe
   

}
