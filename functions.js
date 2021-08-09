function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("div", event.target.id);
}

function drop(event) {
  event.preventDefault()
  let box = event.dataTransfer.getData("div");
  event.target.appendChild(document.getElementById(box));
}
