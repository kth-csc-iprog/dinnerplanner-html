// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {



// search func 

$scope.search = function(query) {
   $scope.status = "Searching...";
   Dinner.DishSearch.get({title_kw:query},function(data){
     $scope.dishes=data.Results;
     $scope.status = "Showing " + data.Results.length + " results";
   },function(data){
     $scope.status = "There was an error";
   });
 }



$scope.addDishToMenu = function(dish) {
  Dinner.addDishToMenu(dish);
 }


$scope.numberOfGuests = function() {
return Dinner.getNumberOfGuests();
}


});