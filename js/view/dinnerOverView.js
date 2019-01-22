var DinnerOverView = function (container, model) {
    var total = document.createElement('p');
    var currprice = 0;
    var images = ['bakedbrie.jpg', 'icecream.jpg', 'meatballs.jpg', 'sourdough.jpg', 'toast.jpg'];
    var rows = container.find("#dinnerRows");
    function createItem(dish) {
        var outerdiv = document.createElement('div');
        var price = document.createElement('p');
        currprice = dish.ingredients
        .map(ingr => ingr.price)
        .reduce((acc, val) => acc + val) * model.getNumberOfGuests();
        price.innerHTML = currprice + ' SEK';
        var div = document.createElement('div');
        ['dish-item','col-auto', 'col-sm-auto', 'col-lg-auto','text-center', 'border','border-dark','px-0','py-0','d-inline-flex-colum'].forEach(cssClass => div.classList.add(cssClass));
        var paragraph = document.createElement('p');
        paragraph.innerHTML = dish.name;
        var image = document.createElement('img');
        image.src = './images/' + dish.image;
        image.height = 127;
        image.width = 170;
        image.classList.add('center-image');
        ['align-self-end','my-0'].forEach(cssClass => paragraph.classList.add(cssClass));
        div.appendChild(image);
        div.appendChild(paragraph);
        price.classList.add("float-right");
        outerdiv.appendChild(div);
        outerdiv.appendChild(price);

        return outerdiv;
    }

    rows.append(model.getFullMenu().map(createItem));
    total.innerHTML = ' Total:' + "<br>" +  model.getTotalMenuPrice() + ' SEK' ;
    var hallare = document.createElement('div');
    var avdelare = document.createElement('div');
    var nydiv = document.createElement('div');
    nydiv.appendChild(total);
    avdelare.classList.add("avdelare");
    nydiv.classList.add("d-flex")
    nydiv.classList.add("align-self-end");
    nydiv.classList.add("lyft");
    hallare.classList.add("row");
    hallare.classList.add("col-md-1");
    hallare.classList.add("col-sm-12");
    hallare.append(avdelare);
    hallare.append(nydiv);
    rows.append(hallare);
    
}