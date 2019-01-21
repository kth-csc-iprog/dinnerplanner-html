var DinnerPrintoutView = function (container, model) {
    function createPrintout(dish) {
        const box = document.createElement('div');
        box.classList.add('row');

        const imageCss = ['col-sm-12', 'col-lg-3', 'col-md-3'];
        const image = document.createElement('img');
        imageCss.forEach(css => image.classList.add(css));
        image.src = './images/' + dish.image;

        const dishBoxCss = ['col-sm-12', 'col-lg-4', , 'col-md-4'];
        const dishBox = document.createElement('div');
        dishBoxCss.forEach(css => image.classList.add(css));
        const title = document.createElement('h4');
        title.innerHTML = dish.name;
        const description = document.createElement('p');
        description.innerHTML = dish.description;
        dishBox.appendChild(title);
        dishBox.appendChild(description);

        const preparationCss = ['col-sm-12', 'col-lg-5', 'col-md-5'];
        const preparation = document.createElement('p');
        preparationCss.forEach(css => image.classList.add(css));
        preparation.innerHTML = dish.preparation;

        box.append(image);
        box.append(dishBox);
        box.append(preparation);
        return box;
    }

    container.append(model.getDishes().map(createPrintout));
}