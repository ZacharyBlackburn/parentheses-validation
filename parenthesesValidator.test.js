const parenthesesValidator = require('./parenthesesValidator')

// boolean test
test('Expects return value to be a boolean', () => {
  expect(typeof parenthesesValidator("()")).toBe('boolean');
});

// test empty string
test('Expects return value to be true', () => {
  expect(parenthesesValidator("")).toBe(true);
});

// test string with only an open parentheses
test('Expects return value to be false', () => {
  expect(parenthesesValidator("(")).toBe(false);
});

// test string with only a closed parentheses
test('Expects return value to be false', () => {
  expect(parenthesesValidator(")")).toBe(false);
});

// test string with whitespace, letters, symbols, and numbers and no parentheses
test('Expects return value to be true', () => {
  expect(parenthesesValidator("-.hello world. . .5?!@#56")).toBe(true);
});

// test string with open and closed parentheses
test('Expects return value to be true', () => {
  expect(parenthesesValidator("()")).toBe(true);
});

// test string with open and closed parentheses and nested parentheses
test('Expects return value to be true - string has properly open and closed nested parentheses', () => {
  expect(parenthesesValidator("(())")).toBe(true);
});

// test string with open and closed parentheses surrounding a sentence
test('Expects return value to be true', () => {
  expect(parenthesesValidator("(Hello World!)")).toBe(true);
});

// test string with open and closed parentheses surrounding a sentence and nested parentheses
test('Expects return value to be true - string has properly open and closed nested parentheses', () => {
  expect(parenthesesValidator("(()Hello(())World()!)")).toBe(true);
});

// test string with incorrect open and closed parentheses surrounding a sentence
test('Expects return value to be false - string does not have properly open and closed nested parentheses', () => {
  expect(parenthesesValidator(")Hello World!)")).toBe(false);
});

