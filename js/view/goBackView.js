var GoBackView = function (container, model) {
    const dinnerText = document.createElement('h3');
    dinnerText.innerHTML = "My dinner for " + model.getNumberOfGuests() + ' people';
    dinnerText.classList.add('dinner-text');
    const button = document.createElement('button');
    button.classList.add('go-back-btn');
    button.innerHTML = "Go back and edit dinner"
    container.append(dinnerText);
    container.append(button);
}