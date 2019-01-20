var DishDetailView = function (container, model) {
  var numberOfGuests = container.find(".numberOfGuests");
  var ingredientList = container.find("#listOfIngredients");
  var dishPrice = 0;

  numberOfGuests.html(model.getNumberOfGuests());
  model.currentViewingDish = model.selectedDishes[0]; // for test, should be deleted
  var dishTitle = container.find("#dishTitle");
  dishTitle.text(model.currentViewingDish.name);

  var detailImg = container.find("#detailImg");
  detailImg.prop("src", "../images/" + model.currentViewingDish.image);
  detailImg.prop("alt",  model.currentViewingDish.name);

  var detailDescription = container.find("#detailDescription");
  detailDescription.text(model.welcomeText);

  var loadIngredients = () => {
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

  loadIngredients();

  this.backToSearchButton = container.find("#backToSearchButton");
  this.addToMenuButton = container.find("#addToMenuButton");
}
