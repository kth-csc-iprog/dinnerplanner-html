var WelcomeView = function (container, model) {
  var welcomeText = container.find("#welcomeText");
  welcomeText.html(model.welcomeText);

  this.createNewDinnerButton = container.find("#createNewDinnerButton");

}

