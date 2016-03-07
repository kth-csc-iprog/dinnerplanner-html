// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

  	$scope.totalPrice = 0;

  Dinner.Dish.get({
  	id:$routeParams.dishId,
  },

  function(data){
  	$scope.currentDish = data;
  	for (var i = data.Ingredients.length - 1; i >= 0; i--) {
  		$scope.totalPrice += data.Ingredients[i].Quantity;
  	}
  	console.log(data)

  },function(data){
  	console.log("fail")
  });

});