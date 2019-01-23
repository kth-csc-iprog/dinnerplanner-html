var DishDetailsView = function (container, model) {
    const dish = model.getDishes()[0];

    const overviewBox = document.createElement('div');
    ['col-sm-12', 'col-md-6', 'p-3'].forEach(css => overviewBox.classList.add(css));

    const title = document.createElement('h4');
    title.innerHTML = dish.name;

    const image = document.createElement('img');
    image.src = './images/' + dish.image;

    const desc = document.createElement('p');
    desc.innerHTML = dish.type;

    const goBackBtn = document.createElement('button');
    goBackBtn.innerHTML = "Back to search";
    ['btn', 'btn-light'].forEach(cssClass => goBackBtn.classList.add(cssClass));

    overviewBox.appendChild(title);
    overviewBox.appendChild(image);
    overviewBox.appendChild(desc);
    overviewBox.appendChild(goBackBtn);

    const ingredientsBox = document.createElement('div');
    ['col-sm-12', 'col-md-6', 'ingr-table', 'p-3'].forEach(css => ingredientsBox.classList.add(css));

    const ingredientsTitle = document.createElement('h5');
    ingredientsTitle.innerHTML = 'Ingredients for ' + model.getNumberOfGuests() + ' people';

    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    dish.ingredients
        .map(ingr => ingredientsRow(ingr))
        .forEach(row => tableBody.appendChild(row));

    table.appendChild(tableBody);

    const tableFooter = document.createElement('tfoot');
    const footerRow = document.createElement('tr');
    const empt1 = document.createElement('td');
    const empt2 = document.createElement('td');
    const totalPrice = document.createElement('td');
    totalPrice.innerHTML = 'SEK ' +
        dish.ingredients
        .map(ingr => ingr.price)
        .reduce((acc, val) => acc + val) * model.getNumberOfGuests();

    footerRow.appendChild(empt1);
    footerRow.appendChild(empt2);
    footerRow.appendChild(totalPrice);
    tableFooter.appendChild(footerRow);
    table.appendChild(tableFooter);

    const addToMenuBtn = document.createElement('button');
    addToMenuBtn.innerHTML = 'Add to menu';
    ['btn', 'btn-light'].forEach(cssClass => addToMenuBtn.classList.add(cssClass));

    ingredientsBox.appendChild(ingredientsTitle);
    ingredientsBox.appendChild(table);
    ingredientsBox.appendChild(addToMenuBtn);

    const preparationBox = document.createElement('div');
    ['col-sm-12', 'col-md-6'].forEach(css => preparationBox.classList.add(css));

    const preparationTitle = document.createElement('h4');
    preparationTitle.innerHTML = "Preparation";
    const preparationText = document.createElement('p');
    preparationText.innerHTML = dish.description;

    preparationBox.appendChild(preparationTitle);
    preparationBox.appendChild(preparationText);


    container.append(overviewBox);
    container.append(ingredientsBox);
    container.append(preparationBox);

    function ingredientsRow(ingredient) {
        const row = document.createElement('tr');

        const amount = document.createElement('td');
        amount.innerHTML = ingredient.quantity + ' ' + ingredient.unit;
        const ingr = document.createElement('td');
        ingr.innerHTML = ingredient.name;
        const price = document.createElement('td');
        price.innerHTML = 'SEK ' + ingredient.price;

        row.appendChild(amount);
        row.appendChild(ingr);
        row.appendChild(price);

        return row;
    }


}
