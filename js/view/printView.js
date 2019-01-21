/**
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */

var PrintView = function (container, model) {
  var numberOfGuests = container.find(".numberOfGuests");
  var orderedItems = container.find("#orderedItemsList");

  var loadOrderedItems = () => {
    numberOfGuests.text(model.getNumberOfGuests());
    model.selectedDishes.forEach(dish => {
      var imgAtLeft = $("<img>");
      var name = $("<h2/>");
      var description = $("<p/>");
      var preparation = $("<h3/>");
      var prepText = $("<p/>");
      var midPart = $("<section/>");
      var rightPart = $("<section/>");
      var listItem = $("<li/>");
      imgAtLeft.prop("src", "../images/" + dish.image);
      name.text(dish.name);
      description.text(dish.description);
      preparation.text("Preparation");
      // there is no text for prep part, so reuse description
      prepText.text(dish.description);
      midPart.append(name);
      midPart.append(description);
      rightPart.append(preparation);
      rightPart.append(prepText);
      // a dish consists of 3 parts
      listItem.append(imgAtLeft);
      listItem.append(midPart);
      listItem.append(rightPart);
      orderedItems.append(listItem);
    });
  }
  loadOrderedItems();
}
