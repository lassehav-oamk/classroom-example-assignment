const { calculateSum } = require("./exampleAssignment");

describe("calculateSum", () => {
  test("should return 1", () => {
    expect(calculateSum(0, 1)).toBe(1);
  });
  test("should return 2", () => {
    expect(calculateSum(1, 1)).toBe(2);
  });
  test("should return 3", () => {
    expect(calculateSum(2, 1)).toBe(3);
  });
  test("should return 4", () => {
    expect(calculateSum(3, 1)).toBe(4);
  });
  test("should return 55", () => {
    expect(calculateSum(5, 50)).toBe(55);
  });
  test("should return 100", () => {
    expect(calculateSum(50, 50)).toBe(100);
  });
  test("should return 0", () => {
    expect(calculateSum(-50, 50)).toBe(0);
  });
  test("should return 0", () => {
    expect(calculateSum(50, -50)).toBe(0);
  });
});
