const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clear");
const resizeBtn = document.querySelector("#resize");
const randomBtn = document.querySelector("#random");
const opacityBtn = document.querySelector("#opacity");
let gridSize = 16;
let drawing = false;
let color = "black";
let opacity = false;
let isIcreasing = true;
let opacityLevel = 100;

// Add squares
function createSquares() {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let i = 0; i < gridSize; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  }
}

// Add color
function changeSquareColor(e) {
  e.preventDefault();
  if (!e.target.matches(".column")) return;
  if (color === "random") {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `RGB(${r},${g},${b})`;
  }
  if (color === "black") e.target.style.backgroundColor = `#4D4946`;

  if (opacity) changeOpacity(e);
}

// Resize
function resizeSquares() {
  input = +prompt("Number of squares per side (max 64)");
  if (input && typeof input === "number" && input <= 64) {
    gridSize = input;
    clearSquares();
  } else {
    alert("Insert a valid number");
  }
}

// Opacity
function changeOpacity(e) {
  e.target.style.opacity = `${opacityLevel}%`;

  if (isIcreasing) {
    opacityLevel -= 10;
    if (opacityLevel <= 0) {
      isIcreasing = false;
      value = 0;
    }
  } else {
    opacityLevel += 10;
    if (opacityLevel >= 100) {
      isIcreasing = true;
      opacityLevel = 100;
    }
  }
}

// Clear
function clearSquares() {
  container.innerHTML = "";
  createSquares();
}

container.addEventListener("mousedown", (e) => {
  drawing = true;
  changeSquareColor(e);
});
container.addEventListener("mouseover", (e) => {
  if (!drawing) return;
  changeSquareColor(e);
});
container.addEventListener("mouseup", () => {
  drawing = false;
});

resizeBtn.addEventListener("click", resizeSquares);
randomBtn.addEventListener("click", () => {
  color = color === "black" ? "random" : "black";
});
opacityBtn.addEventListener("click", () => {
  opacity = !opacity;
});
clearBtn.addEventListener("click", clearSquares);

createSquares();
