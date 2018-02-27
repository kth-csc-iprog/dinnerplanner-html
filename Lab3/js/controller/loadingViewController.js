var LoadViewController = function(view, model, sControl) {
	var view = view;
	var sControl = sControl;

	view.updateView = function(args) {
		switch(args) {
		    case "startLoading":
		    	console.log("uppdatera");
		    	sControl.startLoading();
		        break;
		    case "stopLoading":
		     	console.log("klar med load");
		     	sControl.stopLoading();
				break;		        
  		    default:
		    	break;
		}
	}


}