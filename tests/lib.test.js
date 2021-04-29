const lib = require("../lib");
const db = require("../db");

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
    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  it("Should throw error if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("Should return user object if valid username is passed", () => {
    const result = lib.registerUser("Solomon");
    expect(result).toMatchObject({ username: "Solomon" });
    expect(result.id).toBeGreaterThan(0);
  });
});

describe("applyDiscount", () => {
  it("should apply 10% discount if the customer has more than 10 points", () => {
    db.getCustomerSync = function (customerId) {
      console.log("Fake reading customer...");
      return { id: customerId, points: 20 };
    };
    const order = { customerId: 1, totalprice: 10 };
    lib.applyDiscount(order);
    expect(order.totalprice).toBe(9);
  });
});
