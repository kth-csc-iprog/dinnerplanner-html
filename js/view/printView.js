/**
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */

var PrintView = function (container, model) {
    var numberOfGuests = container.find(".numberOfGuests");
    var orderedItems = container.find("#orderedItemsList");

    numberOfGuests.text(model.getNumberOfGuests());
    model.selectedDishes.forEach(e => {
        var imgAtLeft = $("<img>");
        var name = $("<h2/>");
        var description = $("<p/>");
        var preparation = $("<h3/>");
        var prepText = $("<p/>");
        var midPart = $("<section/>");
        var rightPart = $("<section/>");
        var listItem = $("<li/>");

        imgAtLeft.prop("src", "../images/" + e.image);
        name.text(e.name);
        description.text(e.description);
        preparation.text("PREPARATION");
        // there is no text for prep part, so reuse description
        prepText.text(e.description);

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