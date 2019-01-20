var DishDetailView = function (container, model) {
    var numberOfGuests = container.find(".numberOfGuests");
    var ingredientList = container.find("#listOfIngredients");
    var dishPrice = 0;

    numberOfGuests.html(model.getNumberOfGuests());
    model.currentViewingDish = model.selectedDishes[0]; // for test, should be deleted
    container.find("#dishTitle").text(model.currentViewingDish.name);
    container.find("#detailImg").get(0).src = "../images/" + model.currentViewingDish.image;
    container.find("#detailDescription").text(model.welcomeText);

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

}