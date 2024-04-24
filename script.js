const container = document.querySelector(".container");
let gridSize = 16;

// Add squares
function createSquares() {
  opacity = 100;
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

const randInt = () => Math.floor(Math.random() * 256);
let opacity = 100;
function changeSquareColor(e) {
  if (e.target.matches(".column")) {
    const [r, g, b] = [randInt(), randInt(), randInt()];
    e.target.style.backgroundColor = `RGB(${r},${g},${b})`;

    // Add opacity in each iteration
    e.target.style.opacity = `${opacity}%`;
    if (opacity) {
      opacity -= 10;
    }
  }
}

container.addEventListener("mouseover", changeSquareColor);

// Clear
function clearSquares() {
  container.innerHTML = "";
  createSquares();
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearSquares);

// Resize
function resizeSquares() {
  input = +prompt("Number of squares per side (maximum 100)");
  if (input && typeof input === "number") {
    gridSize = input;
    clearSquares();
  } else {
    alert("Insert a valid number");
  }
}

const resizeBtn = document.querySelector(".resize");
resizeBtn.addEventListener("click", resizeSquares);

createSquares();
