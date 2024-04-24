const container = document.querySelector(".container");
let gridSize = 16;

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

// function changeSquareColor(e) {
//   e.target.style.backgroundColor = "#000";
// }

// container.addEventListener("mousemove", changeSquareColor);

// Clear button
function clearSquares() {
  container.innerHTML = "";
  createSquares();
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearSquares);

// Resize button
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
