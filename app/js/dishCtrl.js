// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

  	var totalPrice = 0;

  Dinner.Dish.get({
  	id:$routeParams.dishId,
  },

  function(data){
  	//Calculate the price per person and add it to the dish object
  	for (var i = data.Ingredients.length - 1; i >= 0; i--) {
  		totalPrice += data.Ingredients[i].Quantity;
  	}
  	data.Price = totalPrice; 

  	$scope.currentDish = data;

  },function(data){
  	console.log("fail")
  });

});