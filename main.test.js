'use strict';

const { add, multiply } = require('./main');

// Grupa testów dla funkcji add
describe('add function tests', () => {
  test('adds 3 + 5 to equal 8', () => {
    expect(add(3, 5)).toBe(8);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(add(0,0)).toBe(0);
  });

  // ... inne testy dla funkcji add
});

// Grupa testów dla funkcji multiply
describe('multiply function tests', () => {
  test('multiplies 2 * 4 to equal 8', () => {
    expect(multiply(2,4)).toBe(8);
  });

  test('multiplies 6 * 0 to equal 0', () => {
    expect(multiply(6, 0)).toBe(0);
  }  ) ;

  // ... inne testy dla funkcji multiply
} ) ;
