var SearchView = function (container, model){
/*
    <div id="searchField" class="col-md-5 ">
    <div id="searchBar" class="input-group">
        <input type="text" class="form-control">
        <span class="input-group-btn">
            <button type="button" class="btn btn-primary specialButton">
                <span class="glyphicon glyphicon-search "></span>
                Search
            </button>
        </span>
    </div>
    </div>*/

    var searchBar = container.find("#searchBar");


    var inputField = document.createElement("INPUT");
    inputField.setAttribute("type", "text");
    //inputField.setAttribute("value", "search for a recipe!");
    inputField.setAttribute("class", "form-control");
   /* var btn = document.createElement("BUTTON");
    btn.setAttribute("type","button");
    btn.setAttribute("class", "btn btn-primary specialButton");
    var spanElement=document.createElement("SPAN");
    spanElement.setAttribute("class", "glyphicon glyphicon-search");
    btn.append(spanElement);
    btn.value = "Search";*/
    searchBar.prepend(inputField);

/*
    function myFunction() {
        container.find("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    container.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
    
        var dropdowns = container.find("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }*/
    

    //Search input field


}