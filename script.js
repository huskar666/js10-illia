document.getElementById("myButton").onclick = () => alert("Hello World!");  


const randomNumber = Math.floor(Math.random() * 100) + 1;

const checkGuess = () => {
  const userGuess = Number(document.getElementById("guessField").value);
  const resultElement = document.getElementById("guessResult");

  if (userGuess === randomNumber) {
    resultElement.textContent = "ви вгадали!";
  } else if (userGuess > randomNumber) {
    resultElement.textContent = "ваше число занадто велике.";
  } else {
    resultElement.textContent = "ваше число занадто мале.";
  }
};


let clickCount = 0;
document.body.onclick = () => {
  clickCount++;
  console.log(`кількість кліків: ${clickCount}`);
};


const applyCallback = (arr, callback) => {
    const result = [];
    for (const item of arr) {
      result.push(callback(item));
    }
    return result;
  };
  
  const arr = [1, 2, 3, 4, 5];
  const squareCallback = (num) => num * num;
  
  const result = applyCallback(arr, squareCallback);
  console.log(result);
  

  const calculate = (price, discount, callback) => {
    const discountedPrice = price - (price * discount) / 100;
    return callback(discountedPrice);
  };
  
  const showDiscountedPrice = (price) => console.log(`ціна зі знижкою: ${price}`);
  
  calculate(100, 10, showDiscountedPrice);
  
