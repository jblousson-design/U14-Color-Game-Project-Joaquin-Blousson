let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

let extremeButton = document.querySelector("#extreme");
let hardButton = document.querySelector("#hard");
let easyButton = document.querySelector("#easy");
let resetButton = document.querySelector("#reset");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");

function reset() {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "Nuevos colores"; 
  h1.style.backgroundColor = "#232323";
  
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

easyButton.addEventListener("click", function() {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  extremeButton.classList.remove("selected");
  numberOfSquares = 3;
  reset();
});

hardButton.addEventListener("click", function() {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  extremeButton.classList.remove("selected");
  numberOfSquares = 6;
  reset();
});

extremeButton.addEventListener("click", function() {
  extremeButton.classList.add("selected");
  hardButton.classList.remove("selected");
  easyButton.classList.remove("selected");
  numberOfSquares = 9;
  reset();
});

resetButton.addEventListener("click", function() {
  reset();
});

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "¡Correcto!";
      h1.style.backgroundColor = clickedColor;
      changeColors(clickedColor);
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Intentalo nuevamente";
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
