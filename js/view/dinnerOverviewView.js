var DinnerOverviewView = function (container, model) {
  var numberOfGuests = container.find("#numberOfGuests");
  numberOfGuests.html(model.getNumberOfGuests());

  var selectedDishes = container.find("#selectedDishesOverview");

  var displaySelectedDishes = function () {
    selectedDishes.html("");
    for (var i=0; i < model.selectedDishes.length; i++) {
      var dishSpan = $("<span/>");
      var dish = model.selectedDishes[i];
      var dishItem = $("<a/>");
      var image = $("<img/>");
      var heading = $("<h3/>");
      var dishPrice = model.getDishPrice(dish);
      var priceSpan = $("<span/>");

      image.prop("alt", dish["name"]);
      image.prop("src", "../images/" + dish["image"]);

      heading.text(dish["name"]);

      priceSpan.text(dishPrice + " SEK");

      dishItem.append(image);
      dishItem.append(heading);
      dishItem.append(priceSpan);

      selectedDishes.append(dishItem);
    }
  }

  displaySelectedDishes();

  var totalCost = container.find("#totalCost");
  totalCost.html(model.getTotalMenuPrice());

  this.backButton = container.find("#backButton");
  this.printRecipeButton = container.find("#printRecipeButton");
}
