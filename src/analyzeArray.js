function analyzeArray(array) {
  if (!Array.isArray(array)) {
    throw new Error('Invalid input');
  }

  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = analyzeArray;