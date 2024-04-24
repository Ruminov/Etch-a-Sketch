const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clear");
const resizeBtn = document.querySelector("#resize");
const randomBtn = document.querySelector("#random");
let gridSize = 16;
let drawing = false;
let color = "black";

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
  if (e.target.matches(".column") && color === "random") {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `RGB(${r},${g},${b})`;
  }
  if (e.target.matches(".column") && color === "black") {
    e.target.style.backgroundColor = `#4D4946`;
  }
}

// Clear
function clearSquares() {
  container.innerHTML = "";
  createSquares();
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

clearBtn.addEventListener("click", clearSquares);
resizeBtn.addEventListener("click", resizeSquares);
randomBtn.addEventListener("click", () => {
  color = "random";
});

createSquares();
