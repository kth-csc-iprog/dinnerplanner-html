$(function() 
{
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"));

    //
    //var sideBarView = new SideBarView($("#sideBar"), model);
    //var dishItemView =new DishItemView($("#dishItems"), model);
    //var dishDetailsView = new DishDetailsView($("#dishDetails"), model);
	//var searchView = new SearchView($("#searchField"), model);
    //var dinnerPrintoutView = new DinnerPrintoutView( $("#fifthView"), model);
    

    
    /**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */
    
    // pagesDisplayer will contain all functions that shows the pages/views on the screen
    var pagesDisplayer = {};
    
    // Will contain all the views
    var views = {};
    
    // Will contain all the controllers
    var controllers = {};
    
    // This is the div that contains everything on the app
    var appDiv = $("#appDiv");
    
    
    
    pagesDisplayer.showHomePage = function()
    {
        appDiv.html(homeTemplate);
        
        // create an instance of HomeView (it populates the HTML and
        //   creates references to HTML's elements that will be used on the controller)
        // #homeView is the id of the div that contains all the home page.
        views.homeView = new HomeView($("#homeView"), model);
        
        // Create an instance of HomeController and stores it in the controllers array.
        // The HomeController will use the variables created in the view and will listen
        //  to possible interactions (button clicks and such) and take some action.
        controllers.homeController = new HomeController(views.homeView, model, pagesDisplayer);
    }
    
    
    // show sidebar + findDishes 
    pagesDisplayer.showSelectDishesPage = function(){
       appDiv.html("");
       showSideBar();
       showFindDishes();
    }
    
   
    pagesDisplayer.showDishDetails = function(dishId){
       appDiv.html(""); 
       showSideBar();
       showDishDetails(dishId);       
    }
    
    pagesDisplayer.showDinnerSummary = function(){
       appDiv.html(dinnerSummaryTemplate); 
       views.dinnerSummary = new DinnerSummaryView($("#dinnerSummary"), model);
       controllers.dinnerSummaryController = new DinnerSummaryController(views.dinnerSummary, model, pagesDisplayer);
    }
    
    
    pagesDisplayer.showFullReceipe = function(){
       appDiv.html(fullRecipeTemplate); 
       views.fullRecipe = new FullReceipeView($("#fullReceipe"), model);
       controllers.fullReceipeController = new FullReceipeController(views.fullRecipe, model, pagesDisplayer);
    }    
   
    
    
    
    
    // ==================================================================================================================
    function showSideBar(){
        appDiv.html(sideBarTemplate);
        views.sideBar = new SideBarView($("#sideBar"), model);
        controllers.sidebarController = new SideBarController(views.sideBar, model, pagesDisplayer);       
    }
    
    function showFindDishes(){
       appDiv.append(findDishesTemplate);
       views.findDishes = new SearchView($("#findDishes"), model);
       controllers.searchController = new SearchController(views.findDishes, model, pagesDisplayer);
    }    
    
   
    function showDishDetails(id) 
    {
        appDiv.append(dishDetailsTemplate);
        views.dishDetails = new DishDetailsView($("#dishDetails"), model, id);
        controllers.dishDetailsController = new DishDetailsController(views.dishDetails, model, pagesDisplayer);       
    }      
    // ==================================================================================================================

   
   
   
    /*
    pagesDisplayer.showSearchView = function(){
        appDiv.html("");
        showSideBar();
        showSelectableDishes();
    }      
    */
    
    
/*    
    pagesDisplayer.showSearchView = function()
    {
        pagesDisplayer.showSideBar();
        //appDiv.html(searchTemplate);
    }    
    
    
    
    pagesDisplayer.showSideBar = function()
    {
        appDiv.html(sideBarTemplate);
        appDiv.append(dishDetailsTemplate);  
        
        views.sideBar = new SideBarView($("#sideBar"), model);
         
        controllers.sidebarController = new SideBarController(views.sideBar, model, pagesDisplayer);
    }
*/
    

    
    
   /*
    function showDishDetails() 
    {
        appDiv.append(dishDetailsTemplate);
        views.dishDetails = new DishDetailsView($("#dishDetails"), model);
        controllers.dishDetailsController = new DishDetailsController(views.dishDetails, model, pagesDisplayer);       
    }                                          
   
   
    pagesDisplayer.showDishDetailsPage = function()
    {
       appDiv.html(""); 
       showSideBar();
       showDishDetails();
    }    
    */
   
    
    pagesDisplayer.showHomePage();
    //pagesDisplayer.showSelectDishesPage();
    //pagesDisplayer.showDishDetailsPage();    
    //pagesDisplayer.showDinnerSummary();
   
    //pagesDisplayer.showFullReceipe();   
});





