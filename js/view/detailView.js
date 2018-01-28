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
var detailView = function (container, model) {
  
  var dishesPrint = container.find("#detailView");


  for (var i=0; i<model.dishes.length;i++){
    dishesHtml +=  "<div class='dishView col-md-3 h-200'>";
    dishesHtml +=  "<div class='thumbnail'>";
        //get .image from list
    dishesHtml +=  "<img src='images/";
    dishesHtml +=  model.dishes[i].image;
    dishesHtml +=  "' >";
    dishesHtml += "<div class='caption'>";
          //get .name from list
    dishesHtml += "<h4>"
    dishesHtml += model.dishes[i].name;
    dishesHtml += "</h4>";
    dishesHtml += "</div>";
    dishesHtml += "</div>";
    dishesHtml += "</div>";
  }

 

  // Print html
  dishesPrint.html(dishesPrintHtml);
};
