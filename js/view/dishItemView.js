var DishItemView = function (container, model) {

    var images = ['bakedbrie.jpg', 'icecream.jpg', 'meatballs.jpg', 'sourdough.jpg', 'toast.jpg'];

    function createItem(dish) {
        var div = document.createElement('div');
        ['dish-item', 'col-sm-6', 'col-lg-3'].forEach(cssClass => div.classList.add(cssClass));
        var paragraph = document.createElement('p');
        paragraph.innerHTML = dish.name;
        var image = document.createElement('img');
        const index = Math.floor(Math.random() * 5)
        image.src = './images/' + images[index];
        image.height = 50;
        image.classList.add('center-image');
        div.appendChild(image);
        div.appendChild(paragraph);
        return div;
    }

    container.append(model.getDishes().map(createItem))
}