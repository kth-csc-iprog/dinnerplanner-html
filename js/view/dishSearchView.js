var DishSearchView = function (container, model) {
    const dishes = model.getEveryDish();
    
    dishes.forEach(function (j) {
        new DishItemView($("#dishList"),j, model);
    });
}