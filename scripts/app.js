let numberForFibonacci = document.querySelector("#numberForFibonacciGenerator");
let handleNumberFromFibonacci = document.querySelector(
  "#numberForFibonacciGeneratorButton"
);
let cardArticleFibonacciResult = document.createElement("article");
document
  .querySelector("#resultFibonacci")
  .appendChild(cardArticleFibonacciResult);

let calculateFibonacci = () => {
  array = [0, 1];
  let fi1 = 0;
  let fi2 = 1;
  for (let i = 3; i <= numberForFibonacci.value; i++) {
    fiNextPlus = fi1 + fi2;

    // 1 iteration fiNextPlus = 1
    // 2 iteration fiNextPlus = 1+1=2
    // 3 iteration fiNextPlus = 1+2=3
    // 4 iteration fiNextPlus = 2+3=5
    // 4 iteration fiNextPlus = 3+5=8

    console.log(fiNextPlus);

    fi1 = fi2;
    // 1 iteration fi1 = 1
    // 2 iteration fi1 = 1
    // 3 iteration fi1 = 2
    // 4 iteration fi1 = 3
    // 5 iteration fi1 = 5

    console.log(fi1);

    fi2 = fiNextPlus;
    // 1 iteration fi2 = 1
    // 2 iteration fi2 = 2
    // 3 iteration fi2 = 3
    // 4 iteration fi2 = 5
    // 5 iteration fi2 = 8

    console.log(fi2);

    array.push(fi2);
    console.log(array);

    // fibonacciSeries(8);
    // Output: [0, 1, 1, 2, 3, 5, 8]
  }
};

let cardConstructorFibonacciResult = () => {
  cardArticleFibonacciResult.innerHTML = `
  <p>Here is your Fibonacci serie (${numberForFibonacci.value}): ${array}</p>`;
  document
    .querySelector("#resultFibonacci")
    .appendChild(cardArticleFibonacciResult);
};

let handleNumberFromFibonacciGenerator = (event) => {
  event.preventDefault();
  cardArticleFibonacciResult.remove();
  calculateFibonacci();
  cardConstructorFibonacciResult();
};

handleNumberFromFibonacci.addEventListener(
  "click",
  handleNumberFromFibonacciGenerator
);
