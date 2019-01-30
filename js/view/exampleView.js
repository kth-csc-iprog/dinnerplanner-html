/** ExampleView Object constructor
 *
 * This object represents one specific view (in this case the Example view).
 *
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally)
 * - populating the view with the data
 * - updating the view when the data changes
 *
 * You should create a view class like this for every view in your UI.
 *
 * @param {Object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
 var Guests = function(container, model){
   var guests = container.find("#numberOfGuests");
   guests.html(model.getGuestNum());
 }

class WelcomeView {
  constructor (container, model){
    this.container = container;
  	this.model = model;
    this.button = container.querySelector("#test");
    this.button.innerHTML = "Create a TESTy menu!"
  }
}

class MealsView {
  constructor (container, model){
    this.container = container;
    this.model = model;
  }


addMealButtons(){
    var menu = this.model.getFullMenu()
    for (var idx in menu){
        console.log(menu[idx]['name'])
        var newCont = document.createElement("DIV")
        var newButt = document.createElement("BUTTON")
        var newImg = document.createElement("img")
        newCont.className = "container"
        newButt.className = "btn"
        newImg.src = "images/" + String(menu[idx]['image'])
        newImg.alt = String(menu[idx]['name'])
        newButt.innerHTML = String(menu[idx]['name'])
        newCont.appendChild(newImg)
        newCont.appendChild(newButt)
        this.container.appendChild(newCont)
    }
}
}


class ExampleView {
    constructor (container, model) {
	this.container=container;
	this.model=model;

	/**
	 * numberOfGuests is a reference to the <span> element that
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now
	 * only 'Hello world', but you should change this by end of Lab 1).
	 *
	 * IMPORTANT: Never use document.querySelector() directly in the views. Always use
	 * some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 *
	 */

	this.guestNum = container.querySelector("#numberOfGuests");

	/**
	 * When we want references to some view elements to be available from outside of view, we
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 *
	 * We can then, in some other code, use exampleView.plusButton to reference the
	 * this button and do something with it (see Lab 2).
	 *
	 */
	this.plusButton = container.querySelector("#plusGuest");
	this.minusButton = container.querySelector("#minusGuest");

	/**
	 * Here we use numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */
	this.guestNum.innerHTML="Hello World";
    }

    // in lab 2, the Observer update method will come here
}
