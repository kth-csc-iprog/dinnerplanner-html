// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  $scope.type = "main dish";


//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  $scope.search = function(query, filter) {
  	$scope.searching = true;
  	$scope.error = false;

  	Dinner.DishSearch.get({
  		title_kw:query,
  		any_kw:filter,
  	},
  	function(data){
  		$scope.dishes=data.Results;
      console.log(data)
  		$scope.searching = false;
  	},function(data){
  		$scope.error = true;
  	});
  }




});