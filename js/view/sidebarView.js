/** @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var SidebarView = function (container, model) {

    const peopleinput = container.find("#people");

    var nr = model.getNumberOfGuests();
    peopleinput.val(nr);
    

	
}