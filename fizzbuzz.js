module.exports.fizzBuzz = function () {
  if (typeof input !== "number") throw new Error("Input must be a number");

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
};
