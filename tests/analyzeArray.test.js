const analyzeArray = require("../src/analyzeArray");

test("analyzeArray", () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test("analyzeArray with negative numbers", () => {
  expect(analyzeArray([-1, -2, -3, -4])).toEqual({
    average: -2.5,
    min: -4,
    max: -1,
    length: 4,
  });
});

test("analyzeArray with decimal numbers", () => {
  expect(analyzeArray([1.5, 2.5, 3.5, 4.5])).toEqual({
    average: 3,
    min: 1.5,
    max: 4.5,
    length: 4,
  });
});

