const assert = require('assert');
var DinnerModel = require('./dinnerModel');
var m = new DinnerModel();

assert(m.getAllDishes().length == 10);
assert(m.getAllDishes('').length == 10);
assert(m.getAllDishes(null).length == 10);
assert(m.getAllDishes('', null).length == 10);
assert(m.getAllDishes(null, '').length == 10);
assert(m.getAllDishes('', '').length == 10);

assert(m.getAllDishes('starter').length == 3);
assert(m.getAllDishes('starter', '').length == 3);
assert(m.getAllDishes('starter', null).length == 3);

assert(m.getAllDishes(null, 'eggs').length == 1);
assert(m.getAllDishes(null, ['eggs', 'cream']).length == 4);
assert(m.getAllDishes('starter', ['eggs', 'cream']).length == 1);
assert(m.getAllDishes('starter', 'eggs').length == 1);
assert(m.getAllDishes('dessert', 'eggs').length == 0);
