const body = document.querySelector("body");
const topDiv = document.createElement("div");
topDiv.id = "topDiv";
body.appendChild(topDiv);
const title = document.createElement("h1");
title.innerText = "Nell Nell Gram";
topDiv.appendChild(title);
const bttn = document.createElement("button");
topDiv.appendChild(bttn);
bttn.innerText = "Start";

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

bttn.addEventListener("click", () => {
  container.innerHTML = "";
  let r = prompt("How many rows do you want?");
  let c = prompt("How many columns do you want?");
  while (r > 100 || c > 100) {
    alert("Invalid input values. Please enter values between 0-100");
    r = prompt("How many rows do you want?");
    c = prompt("How many columns do you want?");
    if (r <= 100 && c <= 100) {
      break;
    }
  }
  createGrid(r, c);
});

const randomColor = (el) => {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  let d = Math.floor(Math.random() * 101);

  el.style.backgroundColor = `rgb( ${a} ${b} ${c} / ${d}% )`;
};
let mouseIsPressed = false;
function createGrid(r, c) {
  for (let i = 0; i < r; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("style", `height:calc(100% / ${r})`);

    for (let i = 0; i < c; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("style", `width: calc(100% / ${c})`);
      row.appendChild(cell);
      console.log(cell);

      cell.addEventListener("mousedown", () => {
        mouseIsPressed = true;
      });
      cell.addEventListener("mouseup", () => {
        mouseIsPressed = false;
      });
      cell.addEventListener("mousemove", () => {
        if (mouseIsPressed) {
          randomColor(cell);
        }
      });
    }
    container.appendChild(row);
  }
}
