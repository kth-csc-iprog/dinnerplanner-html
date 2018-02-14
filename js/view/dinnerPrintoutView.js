


var DinnerPrintoutView = function (container, model) 
{
    model.addObserver(this);
   
    var nGuests = container.find("#nGuests");
    
    nGuests.html(model.getNumberOfGuests() + " people");
    

    var dishes = model.getSelectedDishes();    
    
    var dishDiv = container.find("#fifthView");
    dishDiv.append("<h1> HELLO </h1>");
    
    
    for(var i=0; i<dishes.length; i++)
    {       
        
        container.append("<div class='row'> <div class='col-md-3'> <img src='images/" + dishes[i].image + "' style='width:150px; height: 150px'> </div>  <div class='col-md-4 bg-primary'>  <h5>" + dishes[i].name + "</h5> <p>" + dishes[i].description + "</p> </div>   <div class='col-md-5 bg-success'>   <h5>Preperations</h5>  <p>" + dishes[i].description + "</p> </div> </div>");
        
        //dishDiv.append("<div class='col-md-4 bg-primary'>  <h5>" + dishes[i].name + "</h5> <p>" + dishes[i].description + "</p> </div>" );
        
    }
    
   

    
    
    
    
    /*
       <div class="row" >
            <div class="col-md-3">
                <img src="images/bakedbrie.jpg" style="width:150px; height: 150px">
            </div>
            
            <div class="col-md-4 bg-primary">
                <h5>Lasagne</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.</p>
            </div>
            
            <div class="col-md-5 bg-success">
                <h5>Preperations</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Tempor id eu nisl nunc mi ipsum faucibus. Diam vulputate ut pharetra sit amet aliquam id
                    diam. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Placerat duis ultricies lacus sed turpis
                    tincidunt id aliquet. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Amet commodo nulla facilisi
                    nullam vehicula ipsum a. Diam maecenas ultricies mi eget. Elementum tempus egestas sed sed. Sed egestas
                    egestas fringilla phasellus faucibus scelerisque eleifend. Id faucibus nisl tincidunt eget nullam non
                    nisi est. Etiam dignissim diam quis enim lobortis. Morbi tincidunt ornare massa eget. Lorem dolor sed
                    viverra ipsum nunc aliquet bibendum. Convallis posuere morbi leo urna molestie at. Penatibus et magnis
                    dis parturient montes nascetur ridiculus mus. </p>
            </div>
            
    </div>
*/
    
       // dishes.append("<div style='width:200px; float: left; margin-left: 10px;'><img src='images/"+dishMenu[i].image+"' style='width:200px; height: 200px'><p>"+dishMenu[i].name+"</p></div>");
}




