var DishSearchView = function (container, model) {
    const dishes = model.getAllDishes("starter");
    

    dishes.forEach(function (j) {
        new DishItemView($("#dishList"),j);

    });
}