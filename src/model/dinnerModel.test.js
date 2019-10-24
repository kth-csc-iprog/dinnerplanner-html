const assert = chai.assert;
const expect = chai.expect;

describe("DinnerModel", () => {
  let model = new DinnerModel();

  beforeEach(() => {
    model = new DinnerModel();
  });

  describe("all the functions are present", () => {
    it("contains all the default functions", () => {
      let functions = [
        model.setNumberOfGuests,
        model.getNumberOfGuests,
        model.getSelectedDish,
        model.getFullMenu,
        model.getAllIngredients,
        model.getTotalMenuPrice,
        model.addDishToMenu,
        model.removeDishFromMenu,
        model.getAllDishes,
        model.getDish
      ];
      functions.forEach(func => expect(typeof func).to.equal('function'));
    })
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

  describe("dishesConst: getting individual dishes", () => {
    it("gets the correct dish", () => {
      const dish1 = model.getDish(1);
      expect(dish1.id).to.equal(1);
      expect(dish1.name).to.equal("French toast");

      const dish100 = model.getDish(100);
      expect(dish100.id).to.equal(100);
      expect(dish100.name).to.equal("Meat balls");
    });

    it("returns undefined if dish is not found", () => {
      const result1 = model.getDish(-1);
      expect(result1).to.equal(undefined);

      const result2 = model.getDish();
      expect(result2).to.equal(undefined);
    });
  });

  describe("dishesConst: filtering for dishes", () => {
    it("returns all dishes if no args are specified", () => {
      const allDishes = model.getAllDishes();
      expect(allDishes.length).to.equal(10);
    });

    it("returns the correct dish type", () => {
      let dishes = model.getAllDishes("starter");
      const onlyHasStarters = dishes.every(dish => dish.dishTypes.includes("starter"));
      expect(onlyHasStarters).to.equal(true);

      dishes = model.getAllDishes("main dish");
      const onlyHasMain = dishes.every(dish => dish.dishTypes.includes("main dish"));
      expect(onlyHasMain).to.equal(true);
    });

    it("filters with keywords", () => {
      let dishes = model.getAllDishes("", "French");
      let allDishesMatch = dishes.every(dish => dish.name.includes("French"));
      expect(dishes.length).to.be.above(0);
      expect(allDishesMatch).to.equal(true);

      dishes = model.getAllDishes("", "Meat");
      allDishesMatch = dishes.every(dish => dish.name.includes("Meat"));
      expect(dishes.length).to.be.above(0);
      expect(allDishesMatch).to.equal(true);
    });

    it("returns correct dishes with filter and type", () => {
      const dishes = model.getAllDishes("starter", "Sour");
      const allDishesMatch = dishes.every(
          dish => dish.name.includes("Sour") && dish.dishTypes.includes("starter")
      );
      expect(dishes.length).to.be.above(0);
      expect(allDishesMatch).to.equal(true);
    });
  });


  describe("dishesConst: menu", () => {
    it("can add dishes", () => {
      model.addDishToMenu(1);
      expect(model.getFullMenu()).to.include(model.getDish(1));

      model.addDishToMenu(100);
      expect(model.getFullMenu()).to.include(model.getDish(1));
      expect(model.getFullMenu()).to.include(model.getDish(100));
    });

    it("can remove dishes", () => {
      model.addDishToMenu(1);
      // dish 1 should be in the menu
      expect(model.getFullMenu()).to.include(model.getDish(1));

      model.removeDishFromMenu(1);
      // should now be removed
      expect(model.getFullMenu()).to.not.include(model.getDish(1));
    });
  });

  describe("spoonacular api: getting individual dishes", () => {
    it("returns a promise", done => {
      expect(model.getDish(559251) instanceof Promise).to.equal(true);
      done();
    });
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

  describe("spoonacular api: filtering for dishes", () => {
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

  describe("spoonacular api: menu", () => {
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

  describe("spoonacular api: loading indicator", () => {
    it("checks if the loading indicator is still visible on the page", () => {
      expect(document.getElementById("loader").style.display).to.equal("none");
    });
  });
});
