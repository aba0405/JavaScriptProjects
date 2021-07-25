let maxAttempts = 4;

let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = [Math.floor(Math.random() * 100)];

btn.addEventListener("click", function () {
  let input = document.getElementById("userInput").value;
  if (input == number) {
    output.innerHTML = `You guessed right, your number was ${number}`;
  } else if (input < number) {
    output.innerHTML =
      "You guessed too low! & You have " + maxAttempts + " attempts left";
    maxAttempts -= 1;
  } else if (input > number) {
    output.innerHTML =
      "You guessed too high! & You have " + maxAttempts + " attempts left";
    maxAttempts -= 1;
  } else if (maxAttempts === 4) {
    output.innerHTML = "You weren't able to guess the correct number";
  }
});
