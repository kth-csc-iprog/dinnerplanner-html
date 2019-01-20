var DishItemsView = function (container, model) {
  var dishes = model.getAllDishes();

  var searchedDishes = container.find("#searchedDishes");

  var displaySearchedDishes = function () {
    searchedDishes.html("");
    dishes.forEach(function(dish) {
      var dishItem = $("<a/>");
      var heading = $("<h3/>");
      var image = $("<img/>");

      heading.text(dish["name"]);

      image.prop("alt", dish["name"]);
      image.prop("src", "../images/" + dish["image"]);

      dishItem.append(image);
      dishItem.append(heading);

      searchedDishes.append(dishItem);
    });
  }

  displaySearchedDishes();
}

