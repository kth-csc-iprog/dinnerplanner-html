var DishItemView = function (container, dish) {
    //container.appendChild('div');
    var $dishDiv = $("<div/>")  
                 .addClass("dish")
                 .addClass("column");
                 

    $(container).append($dishDiv);

    $dishDiv.append('<img src="images/' + dish.image +'"' + '/>');
    $dishDiv.append('<p class="dishName">' + dish.name + '</p>');
}