const assert = chai.assert;
const expect = chai.expect;

describe("DinnerModel", () => {
  let model = new DinnerModel();

  beforeEach(() => {
    model = new DinnerModel();
  });

  describe("number of guests", () => {
    it("can set and get number of guests", () => {
      model.setNumberOfGuests(0);
      expect(model.getNumberOfGuests()).to.equal(0);

      model.setNumberOfGuests(1);
      expect(model.getNumberOfGuests()).to.equal(1);
    });

    it("won't allow negative number of guests", () => {
      model.setNumberOfGuests(1);
      expect(model.getNumberOfGuests()).to.equal(1);

      // this should not change the value
      model.setNumberOfGuests(-1);
      expect(model.getNumberOfGuests()).to.equal(1);
    });
  });

  describe("getting individual dishes", () => {
    it("gets the correct dish", (done) => {
      model.getDish(559251)
      .then((data) => {
        expect(data.title).to.equal("Breakfast Pizza");
        done();
      });
    }).timeout(10000);

    it("returns undefined if dish is not found", (done) => {
      model.getDish(-1)
      .then((data) => {
        expect(data.code).to.equal(404);
        done();
      });
    }).timeout(10000);
  });

  describe("filtering for dishes", () => {
    it("returns all dishes if no args are specified", (done) => {
      model.getAllDishes()
      .then((data) => {
        console.log("data length", data.length);
        expect(data.length).to.equal(10);
        done();
      });
    }).timeout(10000);

    it("returns the correct dish type of main course and pizza", (done) => {
      model.getAllDishes("main course", "pizza")
      .then((data) => {
        console.log("filtered", data);
        const onlyHasPizzas = data.every(dish => dish.title.toLowerCase().indexOf("pizza") > -1);
        expect(onlyHasPizzas).to.equal(true);
        done();
      });
    }).timeout(10000);
  });

  describe("menu", () => {
    it("can add dishes", (done) => {
      model.getDish(559251)
      .then((data) => {
        model.addDishToMenu(data);
        expect(model.getFullMenu().length).to.equal(1);
        expect(model.getFullMenu()[0].id).to.equal(559251);
        done();
      });
    }).timeout(10000);

    it("can remove dishes", (done) => {
      model.getDish(559251)
      .then((data) => {
        model.addDishToMenu(data);
        expect(model.getFullMenu().length).to.equal(1);
        expect(model.getFullMenu()[0].id).to.equal(559251);

        model.removeDishFromMenu(559251);
        expect(model.getFullMenu().length).to.equal(0);
        expect(model.getFullMenu()).to.not.include(data);
        done();
      });
    }).timeout(10000);
  });

  describe("loading indicator", () => {
    it("checks if the loading indicator is still visible on the page", () => {
      expect(document.getElementById("loader").style.display).to.equal("none");
    });
  });
});
