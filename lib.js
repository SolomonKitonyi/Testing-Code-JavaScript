//Testing numbers
module.exports.absolute = function (number) {
  return number >= 0 ? number : -number;
};

//Testing Strings
module.exports.greet = function (name) {
  return "Welcome " + name;
};

//Testing arrays
module.exports.getCurrencies = function () {
  return ["USD", "AUD", "EUR"];
};

//Testing Objects
module.exports.getProduct = function (productId) {
  return { id: productId, price: 10, category: "Goods" };
};

//Testing exceptions
module.exports.registerUser = function (username) {
  if (!username) throw new Error("Username is required");
  return { id: newDate().getTime(), username: username };
};
