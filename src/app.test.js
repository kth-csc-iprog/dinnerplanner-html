var assert = chai.assert;
var expect = chai.expect;

describe("DinnerModel", () => {
  let model = new DinnerModel();

  let homeView = new HomeView($("#page-content"));
  let homeController = new HomeController(homeView);

  let mainView = new MainView($("#page-content"), model);
  let mainController = new MainController(mainView, model);

  let overviewView = new OverviewView($("#page-content"), model);
  let overviewController = new OverviewController(overviewView, model);

  beforeEach(() => {
    model = new DinnerModel();

    homeView = new HomeView($("#page-content"));
    homeController = new HomeController(homeView);

    mainView = new MainView($("#page-content"), model);
    mainController = new MainController(mainView, model);

    overviewView = new OverviewView($("#page-content"), model);
    overviewController = new OverviewController(overviewView, model);
  });

  describe("Home View", () => {
    it("has the start button", () => {
      homeController.renderView();
      const button = document.getElementById("startBtn");
      console.log(button);
      expect(button).to.not.be.a("null");
    });
  });

  describe("Search view", () => {
    beforeEach(() => {
      mainController.renderView();
    });

    it("has a sidebar", () => {
      const sidebar = document.getElementById("sideBarView");
      expect(sidebar).to.not.be.a("null");
    });

    it("has a dish search container", () => {
      const dishSearch = document.getElementById("dishSearchView");
      expect(dishSearch).to.not.be.a("null");
    });

    it("displays a loading message", (done) => {
      const loader = document.getElementById("loader");
      expect(loader).to.not.be.a("null");

      // setTimeout(() => {
        done();
      // }, 3000);
    }).timeout(3000);

    it("displays dishes", (done) => {
      const dishes = document.getElementById("dishItems");
      console.log("dishes", dishes);
      expect(dishes).to.not.be.a("null");
      done();
      // done();
    }).timeout(3000);
  });

  describe("Dish Detail View", () => {
    beforeEach(() => {
      mainController.renderView(592479);
    });

    it("exists", (done) => {
      const detailContainer = document.getElementById("dishDetailView");
      expect(detailContainer).to.not.be.a("null");
      done();
    }).timeout(1000);

    it("has an addToMenu button", (done) => {
      const detailContainer = document.getElementById("dishDetailView");
      const buttons = detailContainer.getElementsByTagName("a");
      let addBtn;
      for (let i=0; i < buttons.length; i++) {
        if (buttons[i].id === "addToMenuBtn") addBtn = buttons[i];
      }

      expect(addBtn).to.not.be.a("null");
      done();
    }).timeout(1000);
  });

  describe("Confirmation page", () => {
    beforeEach(() => {
      overviewController.renderView(false);
    });

    it("exists", () => {
      const overviewContainer = document.getElementById("overviewView");
      expect(overviewView).to.not.be.a("null");
    });

    it("has a print button", () => {
      const printBtn = document.getElementById("toPrintBtn");
      expect(printBtn).to.not.be.a("null");
    });
  });
});
