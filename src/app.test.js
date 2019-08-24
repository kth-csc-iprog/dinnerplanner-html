var assert = chai.assert;
var expect = chai.expect;

describe("DinnerModel", () => {
  let model = null;
  let homeView = null;
  let mainView = null;
  let overviewView = null;

  beforeEach(() => {
    model = new DinnerModel();
    homeView = new HomeView($("#page-content"));
    mainView = new MainView($("#page-content"), model);
    overviewView = new OverviewView($("#page-content"), model);
  });

  describe("Home View", () => {
    it("has the start button", () => {
      homeView.render();
      const button = document.getElementById("startBtn");
      console.log(button);
      expect(button).to.not.be.a("null");
    });
  });

  describe("Search view", () => {
    beforeEach(() => {
      mainView.render();
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

  describe("Confirmation page", () => {
    beforeEach(() => {
      overviewView.render();
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
