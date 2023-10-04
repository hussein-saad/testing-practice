const caesarCipher = require("../src/caesarCipher");

test("caesarCipher", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("caesarCipher with more words", () => {
  expect(caesarCipher("hello world", 2)).toBe("jgnnq yqtnf");
});

test("caesarCipher with punctuation", () => {
  expect(caesarCipher("hello, world!", 2)).toBe("jgnnq, yqtnf!");
});

test("caesarCipher with negative shift", () => {
  expect(caesarCipher("hello, world!", -2)).toBe("fcjjm, umpjb!");
});

test("caesarCipher with shift greater than 26", () => {
  expect(caesarCipher("hello, world!", 28)).toBe("jgnnq, yqtnf!");
});
