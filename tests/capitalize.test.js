const capitalize = require("../src/capitalize");

test("capitalize the first char in a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize the first char in a string", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("capitalize the first char in a string", () => {
  expect(capitalize("12345")).toBe("12345");
});

test("capitalize the first char in a string", () => {
  expect(capitalize("")).toBe("");
});
