var GoBackView = function (container, model) {
    const dinnerText = document.createElement('h3');
    dinnerText.innerHTML = "My dinner for " + model.getNumberOfGuests() + ' people';
    const button = document.createElement('button');
    button.innerHTML = "Go back and edit dinner";
    ['float-right', 'btn', 'btn-light'].forEach(cssClass => button.classList.add(cssClass));
    container.append(dinnerText);
    container.append(button);
}