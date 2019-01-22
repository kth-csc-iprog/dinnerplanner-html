/** @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var SidebarView = function (container, model) {

    const peopleinput = container.find("#people");
    const total = container.find('#total-due');

    const sidebarTable = container.find('#sidebarTable');
    sidebarTable.append(model.getFullMenu().map(dish => createTableRow(dish)))

    var numberOfGuests = model.getNumberOfGuests();
    peopleinput.val(numberOfGuests);
    total.html('Total: $' + model.getTotalMenuPrice());


    function createTableRow(dish) {
        const row = document.createElement('tr');
        const name = document.createElement('td');
        name.innerHTML = dish.name;
        const cost = document.createElement('td');
        cost.innerHTML = 'SEK ' +
            dish.ingredients
            .map(ingr => ingr.price)
            .reduce((acc, val) => acc + val) * model.getNumberOfGuests();

        row.appendChild(name);
        row.appendChild(cost);
        return row;
    }


}