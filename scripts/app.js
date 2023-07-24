let numberForFibonacci = document.querySelector("#numberForFibonacciGenerator");
let handleNumberFromFibonacci = document.querySelector(
  "#numberForFibonacciGeneratorButton"
);
let resultFinonacci = document.querySelector("#resultFibonacci");

let calculateFibonacci = () => {
  array = [0, 1];
  let i1 = 0;
  let i2 = 1;
  for (let i = 3; i <= numberForFibonacci.value; i++) {
    iNextPlus = i1 + i2;
    i1 = i2;
    i2 = iNextPlus;

    array.push(i2);
    console.log(array);

    // fibonacciSeries(8);
    // Output: [0, 1, 1, 2, 3, 5, 8]
  }
};

let handleNumberFromFibonacciGenerator = (event) => {
  event.preventDefault();
  console.log("success");
  calculateFibonacci();
};

handleNumberFromFibonacci.addEventListener(
  "click",
  handleNumberFromFibonacciGenerator
);
