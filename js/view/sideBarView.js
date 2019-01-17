var SideBarView = function (container, model, dishItem) {

    const numberOfGuests = container.find('#numberOfGuests');

    numberOfGuests.html(model.getNumberOfGuests());

    this.plusButton = container.find('#plusGuest');
    this.minusButton = container.find('#minusGuest');

    this.plusButton.on('click', function () {
        const newNumberOfGuest = model.getNumberOfGuests() + 1;
        model.setNumberOfGuests(newNumberOfGuest);
    })

    this.minusButton.on('click', function () {
        const newNumberOfGuest = model.getNumberOfGuests() - 1;
        model.setNumberOfGuests(newNumberOfGuest);
    })
}