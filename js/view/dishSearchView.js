var DishSearchView = function (container, model) {
  dishesTypes = model.getDishesTypes();

  var dishTypeSelect = container.find("#dishTypeSelect");

  var titalizeWords = (words) => {
    return words
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  var listDishesTypes = function () {
    dishTypeSelect.html("");
    var option = $("<option/>");
    option.text("Please select an option")
    dishTypeSelect.append(option);

    dishesTypes.forEach(function(type) {
      var option = $("<option/>");
      option.text(titalizeWords(type));
      option.prop("value", type);
      dishTypeSelect.append(option);
    });
  }

  listDishesTypes();

  this.searchDishButton = container.find("#searchDishButton");
}
