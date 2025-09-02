let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");

const list = [
  //  declared empty array
];

function renderList(arr) {
  listContainer.innerHTML = "";
  arr.map((obj) => {
    let divElem = document.createElement("div");
    divElem.classList.add("list");
    divElem.innerHTML = 
    ` <p>${obj.text}</p> `;

    let buttonElem = document.createElement("button");
    buttonElem.innerText = "❌";
    divElem.appendChild(buttonElem);
    listContainer.append(divElem);
  });
}

renderList(list);

function handleAddList() {
  let obj = {
    id: Date.now(),
    text: addInput.value,
  };

  list.unshift(obj);
  renderList(list);
  addInput.value = "";
}

addBtn.addEventListener("click", handleAddList);

// line through function through event deligation
listContainer.addEventListener("click", (event) => {
  if (event.target.className === "list") {
    event.target.style.textDecoration = "line-through";
  }
});
