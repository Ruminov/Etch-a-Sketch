const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("test");
  container.appendChild(div);
}

function changeBackground(e) {
  //   e.target.style.backgroundColor = "blue";
}

document.addEventListener("mousedown", changeBackground);
