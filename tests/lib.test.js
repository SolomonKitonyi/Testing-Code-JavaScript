const lib = require("../lib");

test("absolute - should return positive number if input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});
