class People {
  constructor (container, model){
    var guests = container.find("#numberOfGuests");
    guests.html(model.getGuestNum());
  }
}
class Price {
  constructor (container, model){
  //  alert(model.getTotalMenuPrice());
    var price = container.find("#TotalPrice");
    price.html(model.getTotalMenuPrice());
  }
}
