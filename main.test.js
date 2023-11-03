"use strict";

const {add, multiply } = require('./main');
// add function tests
test('adds 3 + 5 should be equal to 8', () => {
    expect(add(3, 5)).toBe(8);
});

test('adds 0 + 0 should be equal to 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('adds 5 + -9 should be equal to -4', () => {
    expect(add(5, -9)).toBe(-4);
});

test('adds -8 + 11 should be equal to 8', () => {
    expect(add(-8, 11)).toBe(3);
});
//multiply function tests
test("multiplies 2 * 4 to equal 8", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("multiplies 6 * 0 to equal 0", () => {
    expect(multiply(6, 0)).toBe(0);
})