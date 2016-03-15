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


 $scope.fullMenu = Dinner.getFullMenu();

 $scope.getFullMenu = function() {
 	return Dinner.getFullMenu();
 }

 $scope.getTotalMenuPrice = function(){
 	return Dinner.getTotalMenuPrice();
 	
 }

 $scope.removeDishFromMenu = function(id) {
 	Dinner.removeDishFromMenu(id);
 }

 $scope.addDish = function(dish) {
 	Dinner.addDishToMenu(dish);
 }



  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});