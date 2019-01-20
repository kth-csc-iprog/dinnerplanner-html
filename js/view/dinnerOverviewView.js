var DinnerOverviewView = function (container, model) {
  var numberOfGuests = container.find("#numberOfGuests");
  numberOfGuests.html(model.getNumberOfGuests());

  this.plusButton = container.find("#plusGuest");
  this.minusButton = container.find("#minusGuest");

  var selectedDishes = container.find("#selectedDishes");

  var loadSelectedDishes = function () {
    selectedDishes.html("");
    for (var i =0; i < model.selectedDishes.length; i++) {
      var dishSpan = $("<span/>");
      var priceSpan = $("<span/>");
      var dish = model.selectedDishes[i];
      var dishPrice = model.getDishPrice(dish);
      var listItem = $("<li/>");

      dishSpan.text(dish["name"]);
      priceSpan.text(dishPrice);
      listItem.append(dishSpan);
      listItem.append(priceSpan);
      selectedDishes.append(listItem);
    }
  }

  loadSelectedDishes();

  var totalPrice = container.find("#totalPrice");
  totalPrice.html("SEK " + model.getTotalMenuPrice());

  this.confirmationButton = container.find("#confirmationButton");
}

