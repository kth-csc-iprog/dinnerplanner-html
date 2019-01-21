var DishDetailView = function (container, model) {
  var numberOfGuests = container.find(".numberOfGuests");
  var ingredientList = container.find("#listOfIngredients");
  var prepText = container.find("#prepText");

  numberOfGuests.html(model.getNumberOfGuests());
  model.currentViewingDish = model.selectedDishes[0]; // for test, should be deleted

  var dishTitle = container.find("#dishTitle");
  var detailImg = container.find("#detailImg");
  var detailDescription = container.find("#detailDescription");

  var loadDishInfo = () => {
    dishTitle.text(model.currentViewingDish.name);
    detailImg.prop("src", "../images/" + model.currentViewingDish.image);
    detailImg.prop("alt", model.currentViewingDish.name);
    detailDescription.text(model.currentViewingDish.description);
    //no data for preparation, so reuse description
    prepText.text(model.currentViewingDish.description);
  }

  var loadIngredients = () => {
    var dishPrice = 0;
    model.currentViewingDish.ingredients.forEach(e => {
      var volumeSpan = $("<span/>");
      var unitSpan = $("<span/>");
      var nameSpan = $("<span/>");
      var monetarySpan = $("<span/>");
      var priceSpan = $("<span/>");
      var listItem = $("<li/>");

      dishPrice += e.price;
      listItem.append(volumeSpan.text(e.quantity));
      listItem.append(unitSpan.text(e.unit));
      listItem.append(nameSpan.text(e.name));
      listItem.append(monetarySpan.text("SEK"));
      listItem.append(priceSpan.text(e.price));
      ingredientList.append(listItem);
    });

    container.find("#dishPrice").text(dishPrice);
  }

  loadDishInfo();
  loadIngredients();

  this.backToSearchButton = container.find("#backToSearchButton");
  this.addToMenuButton = container.find("#addToMenuButton");
}