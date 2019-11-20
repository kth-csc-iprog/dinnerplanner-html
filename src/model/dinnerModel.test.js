const assert = chai.assert;
const expect = chai.expect;

describe("DinnerModel", () => {
  let model = new DinnerModel();

  beforeEach(() => {
    model = new DinnerModel();
  });

  // TODO Lab 1: write a test to verify that the number of guests cannot be less than 1.
  // If setNumberOfGuests(num) is called with num <= 0, then then number of guests should be set to 1.

  describe("all the functions are present", () => {
    it("contains all the default functions", () => {
      let functions = [
        model.setNumberOfGuests,
        model.getNumberOfGuests,
        model.getSelectedDishes,
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
      model.setNumberOfGuests(500);
      expect(model.getNumberOfGuests()).to.equal(500);

      model.setNumberOfGuests(1);
      expect(model.getNumberOfGuests()).to.equal(1);
    });
  });

  describe("getting individual dishes", () => {
    let getDishReturnsPromise = model.getDish(1) instanceof Promise;
    let getDishReturnsObject = model.getDish(1) instanceof Object;
    it("returns either an Object or a Promise", () => {
      expect(getDishReturnsObject || getDishReturnsPromise).to.equal(true);
    });
    if (getDishReturnsPromise) {  // if it uses the spoonacular api
      it('dishesConst is removed', () => {
        expect(typeof dishesConst).to.equal('undefined');
      });

      it('the apiConfig is correctly configured', () => {
        expect(typeof ENDPOINT).to.equal('string');
        expect(ENDPOINT).to.not.equal('');
        expect(typeof API_KEY).to.equal('string');
        expect(API_KEY).to.not.equal('');
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

      it("catches errors", (done) => {
        let oldFetch = fetch;
        fetch = () => Promise.reject(new Error('fetching failed'));
        model.getDish(5, fetch)
            .then((data) => {
              expect(true).to.equal(true);
              done()
            })
            .catch(error => {
              expect(true).to.equal(false);
              done();
            });
        fetch = oldFetch;
      }).timeout(10000);

      it("displays a loading indicator when starting fetch and does not display it when the fetch has completed", (done) => {
        model.getDish(5)
            .finally(() => {
              expect(document.querySelector("#loader").style.display).to.equal("none");
              done();
            });
        expect(document.querySelector("#loader").style.display).to.equal("block");
      }).timeout(10000);

      it("displays and removes the loading indicator, even on network failure", (done) => {
        let oldFetch = fetch;
        fetch = () => Promise.reject(new Error('fetching failed'));
        model.getDish(5)
            .finally(() => {
              expect(document.querySelector("#loader").style.display).to.equal("none");
              done();
            });
        expect(document.querySelector("#loader").style.display).to.equal("block");
        fetch = oldFetch;
      }).timeout(10000);

    } else if (getDishReturnsObject) { // if it uses the dishesConst
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
    }
  });

  describe("filtering for dishes", () => {
    let getAllDishesReturnsPromise = model.getAllDishes() instanceof Promise;
    let getAllDishReturnsArray = model.getAllDishes() instanceof Array;
    it("returns either an Array or a Promise", () => {
      expect(getAllDishReturnsArray || getAllDishesReturnsPromise).to.equal(true);
    });

    if (getAllDishReturnsArray) { // if it uses the dishesConst
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

    } else if (getAllDishesReturnsPromise) { // if it uses the spoonacular api
      it("returns all dishes if no args are specified", (done) => {
        model.getAllDishes()
            .then((data) => {
              expect(data.length).to.equal(10);
              done();
            });
      }).timeout(10000);

      it("returns the correct dish type of main course and pizza", (done) => {
        model.getAllDishes("main course", "pizza")
            .then((data) => {
              const onlyHasPizzas = data.every(dish => dish.title.toLowerCase().indexOf("pizza") > -1);
              expect(onlyHasPizzas).to.equal(true);
              done();
            });
      }).timeout(10000);

      it("catches errors", (done) => {
        let oldFetch = fetch;
        fetch = () => Promise.reject(new Error('fetching failed'));
        model.getAllDishes('starter', 'Meat')
            .then((data) => {
              expect(true).to.equal(true);
              done()
            })
            .catch(error => {
              expect(true).to.equal(false);
              done();
            });
        fetch = oldFetch;
      }).timeout(10000);

      it("displays a loading indicator when starting fetch and does not display it when the fetch has completed", (done) => {
        model.getAllDishes('starter', 'Meat')
            .finally(() => {
              expect(document.querySelector("#loader").style.display).to.equal("none");
              done();
            });
        expect(document.querySelector("#loader").style.display).to.equal("block");
      }).timeout(10000);

      it("displays and removes the loading indicator, even on network failure", (done) => {
        let oldFetch = fetch;
        fetch = () => Promise.reject(new Error('fetching failed'));
        model.getAllDishes('starter', 'Meat')
            .finally(() => {
              expect(document.querySelector("#loader").style.display).to.equal("none");
              done();
            });
        expect(document.querySelector("#loader").style.display).to.equal("block");
        fetch = oldFetch;
      }).timeout(10000);
    }
  });

  describe("menu", () => {
    let getDishReturnsPromise = model.getDish(1) instanceof Promise;
    let getDishReturnsObject = model.getDish(1) instanceof Object;

    if (getDishReturnsPromise) { // if it uses the spoonacular api
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

      it("can find the dishes of a specific type on the menu", (done) => {
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

    } else if (getDishReturnsObject) { // if it uses dishesConst
      it("can add dishes", () => {
        model.addDishToMenu(model.getDish(1));
        expect(model.getFullMenu()).to.include(model.getDish(1));

        model.addDishToMenu(model.getDish(100));
        expect(model.getFullMenu()).to.include(model.getDish(1));
        expect(model.getFullMenu()).to.include(model.getDish(100));
      });

      it("can remove dishes", () => {
        model.addDishToMenu(model.getDish(1));
        // dish 1 should be in the menu
        expect(model.getFullMenu()).to.include(model.getDish(1));

        model.removeDishFromMenu(1);
        // should now be removed
        expect(model.getFullMenu()).to.not.include(model.getDish(1));
      });

      it("can find the dishes of a specific type on the menu", () => {
        model.addDishToMenu(model.getDish(1)); // starter
        model.addDishToMenu(model.getDish(2)); // starter
        model.addDishToMenu(model.getDish(100)); // main dish

        let starters = model.getSelectedDishes('starter');
        expect(starters).to.include(model.getDish(1));
        expect(starters).to.include(model.getDish(2));
        expect(starters).to.not.include(model.getDish(100));
      })
    }
  });

  describe("getting all ingredients", () => {
    let getDishReturnsPromise = model.getDish(1) instanceof Promise;
    let getDishReturnsObject = model.getDish(1) instanceof Object;
    if (getDishReturnsPromise) {  // if it uses the spoonacular api
      it("returns an array of all the ingredients of all the dishes on the menu", (done) => {
        model.getDish(1)
            .then((dish) => {
              model.addDishToMenu(dish);
              return model.getDish(2);
            })
            .then(dish => {
              model.addDishToMenu(dish);
              expect(model.getFullMenu().length).to.equal(2);
              expect(model.getAllIngredients().length).to.equal(13);
              let expectedIngredientsNames = ['anchovies', 'baking powder', 'egg', 'flour', 'sage leaves', 'salt', 'seltzer water', 'vegetable oil', 'anchovies', 'bread', 'garlic clove', 'olive oil', 'scallions'];
              let actualIngredientsNames = model.getAllIngredients().map(ingredient => ingredient.name);
              expect(expectedIngredientsNames).to.deep.equal(actualIngredientsNames);
              done();
            })
      }).timeout(10000);
    } else if (getDishReturnsObject) { // if it uses the dishesConst
      it("returns an array of all the ingredients of all the dishes on the menu", () => {
        model.addDishToMenu(model.getDish(1));
        model.addDishToMenu(model.getDish(2));
        let expectedIngredients = [{
          'name': 'eggs',
          'amount': 0.5,
          'unit': '',
        }, {
          'name': 'milk',
          'amount': 30,
          'unit': 'ml',
        }, {
          'name': 'brown sugar',
          'amount': 7,
          'unit': 'g',
        }, {
          'name': 'ground nutmeg',
          'amount': 0.5,
          'unit': 'g',
        }, {
          'name': 'white bread',
          'amount': 2,
          'unit': 'slices',
        }, {
          'name': 'active dry yeast',
          'amount': 0.5,
          'unit': 'g',
        }, {
          'name': 'warm water',
          'amount': 30,
          'unit': 'ml',
        }, {
          'name': 'all-purpose flour',
          'amount': 15,
          'unit': 'g',
        }];
        expect(model.getAllIngredients().length).to.equal(expectedIngredients.length);
        model.getAllIngredients().forEach(ingredient => {
          expect(expectedIngredients).to.have.deep.include(ingredient);
        });
      });
    }
  });

  describe("calculating total menu price", () => {
    let getDishReturnsPromise = model.getDish(1) instanceof Promise;
    let getDishReturnsObject = model.getDish(1) instanceof Object;
    if (getDishReturnsPromise) {  // if it uses the spoonacular api
      it("calculates the correct menu price", (done) => {
        model.setNumberOfGuests(2);
        model.getDish(1)
            .then((dish) => {
              model.addDishToMenu(dish);
              return model.getDish(2);
            })
            .then(dish => {
              model.addDishToMenu(dish);
              expect(Math.abs(model.getTotalMenuPrice() - 1285.14)).to.be.below(0.01);
              done();
            })
      }).timeout(10000);
    } else if (getDishReturnsObject) { // if it uses the dishesConst
      it("calculates the correct menu price", () => {
        model.setNumberOfGuests(2);
        model.addDishToMenu(model.getDish(1));
        model.addDishToMenu(model.getDish(2));
        expect(Math.abs(model.getTotalMenuPrice() - 151.4)).to.be.below(0.01);
      });
    }
  });

  describe("functional code. (These tests don't necessarily have to be passed, but passing them is a good sign.)", () => {
    let testFunctional = (method) => {
      let r = /(for\s*\(|forEach\s*\()/g;
      let str = method.toString();
      expect(r.test(str)).to.equal(false);
    };

    let methodNames = [
      'setNumberOfGuests',
      'getNumberOfGuests',
      'getSelectedDishes',
      'getFullMenu',
      'getAllIngredients',
      'getTotalMenuPrice',
      'addDishToMenu',
      'removeDishFromMenu',
      'getAllDishes',
      'getDish'
    ];

    methodNames.forEach(methodName => {
      it(`${methodName} is functional`, () => {
        testFunctional(model[methodName])
      })
    });
  });
});
