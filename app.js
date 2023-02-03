const WhenHoverShowMessage = document.querySelector(
  ".area-you-want-to-add-event-to-it"
);

WhenHoverShowMessage.addEventListener("mouseover", hover);
WhenHoverShowMessage.addEventListener("mouseout", mouseOut);

function hover() {
  console.log("Hover!");
  WhenHoverShowMessage.classList.add("hover");
}

function mouseOut() {
  WhenHoverShowMessage.classList.remove("hover");
  console.log("Mouse Out!");
}
