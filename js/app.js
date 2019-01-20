$(function () {
  // We instantiate our model
  var model = new DinnerModel();

  // Create the instances of our view
  var exampleView = new ExampleView($("#exampleView"), model);
  var welcomeView = new WelcomeView($("#welcomeView"), model);
  var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
  var dishDetailView = new DishDetailView($("#dishDetailsView"), model);
  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * use the $('someSelector') to search for elements in the whole HTML.
   * In other places you should limit the search only to the children
   * of the specific view you're working with (see exampleView.js).
   */
});