const lib = require("../lib");

describe("absolute", () => {
  it("should return positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("Should return the greeting message", () => {
    const result = lib.greet("Solomon");
    expect(result).toMatch(/Solomon/);

    //Or you can use
    expect(result).toContain("Solomon");
  });
});

describe("getCurrencies", () => {
  it("Should return supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

describe("getProduct", () => {
  it("Should return the product with the given id", () => {
    const result = lib.getProduct(1);
    //expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
  });
});
