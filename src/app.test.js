var assert = chai.assert;
var expect = chai.expect;

describe("DinnerPlanner App", () => {
  let model = null;
  let homeView = null;
  let searchView = null;
  let overviewView = null;
  let sidebarView = null;
  let sidebarController = null;

  beforeEach(() => {
    model = new DinnerModel();
    homeView = new HomeView(document.querySelector("#page-content"));
    searchView = new SearchView(document.querySelector("#page-content"), model);
    overviewView = new OverviewView(document.querySelector("#page-content"), model);
    sidebarView = new SidebarView(document.querySelector("#page-content"), model);
  });

  describe("Home View", () => {
    it("has the start button", () => {
      homeView.render();
      const button = document.getElementById("startBtn");
    });
  });

  describe("Home View", () => {
    it("has the start button", () => {
      homeView.render();
      const button = document.getElementById("startBtn");
      expect(button).to.not.be.a("null");
    });
  });

  describe("Search view", () => {
    beforeEach(async () => {
      let dish = await model.getDish(559251);
      model.addDishToMenu(dish);
      searchView.render();
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
        done();
    }).timeout(3000);

    it("displays dishes", (done) => {
      const dishes = document.getElementById("dishItems");
      expect(dishes).to.not.be.a("null");
      done();
    }).timeout(3000);

    it("Has a number of guests value", () => {
      const valueHolders = document.getElementsByClassName("value-num-guests");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getNumberOfGuests());
      }
    });

    it("Has data on current dishes", () => {
      const valueHolders = document.getElementsByClassName("value-main-course-name");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal("Breakfast Pizza");
      }
    });

    it("Displays the total price correctly", () => {
      const valueHolders = document.getElementsByClassName("value-total-price");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getTotalMenuPrice());
      }
    });
  });

  describe("Confirmation page", () => {
    beforeEach(async () => {
      let dish = model.getDish(559251);
      model.addDishToMenu(dish);
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


    it("Has a number of guests value", () => {
      const valueHolders = document.getElementsByClassName("value-num-guests");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getNumberOfGuests());
      }
    });

    it("Has data on current dishes", () => {
      const valueHolders = document.getElementsByClassName("value-main-course-name");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal("Breakfast Pizza");
      }
    });

    it("Displays the total price correctly", () => {
      const valueHolders = document.getElementsByClassName("value-total-price");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getTotalMenuPrice());
      }
    });
  });

  describe("Sidebar view", () => {
    beforeEach(() => {
      model = new DinnerModel();
      sidebarView = new SidebarView(document.getElementById("page-content"), model);
      sidebarController = new SidebarController(sidebarView, model);
      sidebarController.renderView();
    });

    it("Has a number of guests input", () => {
      const input = document.getElementsByClassName("input-num-guests")[0];
      expect(input).to.not.be.a("null");
      expect(input.tagName).to.equal("INPUT");
      expect(input.value).to.equal("1");
    });

    it("Controller modifies the model", () => {
      const input = document.getElementsByClassName("input-num-guests")[0];
      input.value = 5;
      input.dispatchEvent(new Event("input"));
      expect(""+model.getNumberOfGuests()).to.equal("5");
    });

    it("Observer updates the view", () => {
      model.setNumberOfGuests(6);
      const input = document.getElementsByClassName("input-num-guests")[0];
      expect(""+input.value).to.equal("6");
    });
  });
});
