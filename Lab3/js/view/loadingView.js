var LoadingView = function (container, model) {
	this.container = container;
 	this.model = model;


 	//attach as listener
	model.addObserver(this);

	this.updateView = function(args) {
		switch(args) {
		    case "startLoading":
		    	console.log("uppdatera");
		        break;
		     case "stopLoading":
		     	console.log("klar med load");
				break;

		        
		    default:
		    	break;
		}
	}

 }