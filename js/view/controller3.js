var Controller3 = function(view, model ) {

	$('select').change(function(){
		this.list = view.showDishes($('select').val());  

		for (var i = 0; i<this.list.length; i++){

			console.log(this.list[i]);
			var idDish = this.list[i];

			view.chosenDish = view.container.find("#" + idDish);
			view.chosenDish.click(function(){
				$("#view3").hide();
				$("#view4").show();
				
			});
		}

	});




}