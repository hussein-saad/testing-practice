function caesarCipher(str, num) {
  num = num % 26;
  let lowerCaseString = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    if (!(currentLetter >= "a" && currentLetter <= "z")) {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = (currentIndex + num + 26) % 26;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  return newString;
}

module.exports = caesarCipher;
