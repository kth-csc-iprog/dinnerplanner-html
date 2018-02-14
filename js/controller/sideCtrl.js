function SideController(model, sideView) {
    //Private variables
    this._model = model;
    this._view = sideView;
    var _this = this;

    //Adding Event Listeners (STEP 6)
    this._view.plusButtonClicked.attach(function () {
        _this.plusGuest();
    });
    this._view.minusButtonClicked.attach(function () {
        _this.minusGuest();
    });
  }
    //.prototype is a Javascript "Class" (in quotes because it's officially not the same as a class)
    SideController.prototype = {
        //Change the model data (STEP 9)
        plusGuest: function () {
                this._model.setNumberOfGuests(this._model.getNumberOfGuests() + 1);
              },
        minusGuest: function () {
                if (this._model.getNumberOfGuests()>0) {
                  this._model.setNumberOfGuests(this._model.getNumberOfGuests() - 1);
                }
              }
      };
