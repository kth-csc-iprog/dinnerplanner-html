// helper function to find the container by short name
const container=function(containerName){
  return document.body.querySelector("#container-"+containerName);
};

// the View containers will not all be visible at the same time. 
// Various screens will show different Views                                                              
const screens = { 
         home: ["home"], 
         search: ["header", "sidebar", "search"],
         overview: ["header", "overview"],
      // TODO: add more screens here!    
};

// switching between screens
const show= function(screenName) {
    // hide all views first 
    // optional FIXME: we could avoid hiding the containers that are part of the screen to be shown
    // optional FIXME: finding the containers could be done automatically
    // by looking at document.body.firstChild.children
    ["header", "home", "overview", "search", "sidebar"]
      .forEach(containerName => container(containerName).style.display="none");
    
    // now we show all the Views used by the indicated screen
    screens[screenName]
      .forEach(containerName => container(containerName).style.display = "block");
};
                                                
window.onload = function () {
  //We instantiate our model
  const model = new DinnerModel();

  new HomeView(container("home"), model);
  new OverviewView(container("overview"), model);
  new SearchView(container("search"), model);
  // TODO:  more views here
  // TODO: The views are not being rendered yet. Figure out how to do so.
  
  show("home");

  /**
   * IMPORTANT: app.js is the only place where you are allowed to use document.body
   * In other Views you should limit your DOM searches to children of that View. For that, you must use querySelector()
   * It is possible to implement Views using no DOM search at all, using DOM fields like element.firstChild, 
   * element.nextSibling...
   */
};
