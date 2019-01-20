/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var DishSearchView = function (container, model) {
    dishSearchContainer = container.find('#dishSearchView');

    const optionsMenu =  dishSearchContainer.find("#options");
    optionsMenu.append( new Option("Side dish","Tasty"));
    const btnText = "search"

}