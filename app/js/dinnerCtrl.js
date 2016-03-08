// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

// Gettting the dishAPI

// $scope.getDishAPI = function(dishId) {
//     $scope.status = "Searching..."; 
//     Dinner.getDishAPI.get({id:dishId},function(data){ 
//       console.log(dishId);
//       //var cat = data.Category;
//       //$scope.fullMenu[cat]=data;
//       Dinner.addDishToMenu(data);
//       $scope.status = "Showing " + data.Title;
//     },function(data){ 
//       $scope.status = "There was an error"; 
//     }); 
//   }

  // var menu = {"Appetizers":"", "Main Dish":"", "Desserts":""};
  
// Cookies as objects?? unsure how this would work if we have some kind of key
  //for (key in menu) {
   // if ($cookieStore.get(key) != undefined) {
     // console.log("cookieStore "+$cookieStore.get(key));
     // $scope.getDishAPI($cookieStore.get(key));
   // }
  
 // }

 $scope.fullMenu = Dinner.getFullMenu();

 $scope.getFullMenu = function() {
 	return Dinner.getFullMenu();
 }

 $scope.removeDishFromMenu = function(id) {
 	Dinner.removeDishFromMenu(id);
 }

 $scope.addDish = function(dish) {
 	Dinner.addDishToMenu(dish);
 }


 $scope.getTotalMenuPrice = function() {
 	return Dinner.getTotalMenuPrice();
 }



  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});