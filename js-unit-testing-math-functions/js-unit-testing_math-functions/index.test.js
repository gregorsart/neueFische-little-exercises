import { add, subtract, multiply, divide } from "./index.js";

// ADD ---------------------------------------------------------

test("result of 2 + 3 is 5", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("result is negative if |-argument1| > |+argument2| ", () => {
  const result = add(-3, 2);
  expect(result).toBeLessThan(0);
});

test("result of 0.1 + 0.2 is close to 0.3", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// SUBSTRACT ---------------------------------------------------

test("result of 15 - 5 is 10", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("result is negative if argument1 < argument2", () => {
  const result = subtract(2, 3);
  expect(result).toBeLessThan(0);
});

// MULTIPLY ----------------------------------------------------

test("result of 2 * 4 is 8", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("result is negative, if only first argument is negative", () => {
  const result = multiply(-2, 2);
  expect(result).toBeLessThan(0);
});

test("result is positive, if first and second argument are negative", () => {
  const result = multiply(-2, -2);
  expect(result).toBeGreaterThan(0);
});

// DIVIDE ------------------------------------------------------

test("result of 9 / 3 is 3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("result if second argument === 0 is: 'You should not do this!'", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
