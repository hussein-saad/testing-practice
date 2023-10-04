const reverseString = require("../src/reverseString");

test("reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse a string", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverse a string", () => {
  expect(reverseString("12345")).toBe("54321");
});

test("reverse a string", () => {
  expect(reverseString("")).toBe("");
});
