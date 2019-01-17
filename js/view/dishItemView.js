var DishItemView = function (container, dish) {
    container.append('<div class="dish">')
    container.append('<p>' + dish.name + '</p>');
    container.append('<img src="images/' + dish.image +'"' + '/>');
    container.append('</div>')
}