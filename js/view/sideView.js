var SideView = function (container, model) {
    this._model = model;
    this._container = container;
    var _this = this;

    // Creating new Events for interaction
    this.plusButtonClicked = new Event(this);
    this.minusButtonClicked = new Event(this);

    // Finding the right container in the HTML
    var plusButton = container.find('#plusGuest');
    var minusButton = container.find('#minusGuest');

    // Notify event Listener in sideCtrl that button has been clicked (STEP 8)
    plusButton.click(function () {
        _this.plusButtonClicked.notify();
        });
    minusButton.click(function () {
        _this.minusButtonClicked.notify();
        });

    // Add observers to the Model (STEP 3)
    this._model.addObserver(function () {
        _this.show();
        });

  }

  SideView.prototype = {
    show: function () {
        this.rebuildList();
    },
    // Reading / Refreshing data from the model (STEP 4 / STEP 11)
    rebuildList: function () {
        var numberOfGuests = this._container.find('#numberOfGuests');
        numberOfGuests.html(this._model.getNumberOfGuests());

    }
};
    // +/- GUESTS
    // var guests = model.getNumberOfGuests()

    //
    //
  	// plusGuest.click(function(){
  	// 	guests ++;
  	// 	numberOfGuests.html(guests);
  	// })
    //
  	// minusGuest.click(function(){
  	// 	if (guests>0) {
  	// 		guests --;
  	// 		numberOfGuests.html(guests);
  	// 	}
  	// })
    //

      // CHOSEN DISHES
