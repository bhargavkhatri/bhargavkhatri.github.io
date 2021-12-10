

function fillBackgroundColor() {
  let backgroundColor = document.getElementById("backgroundColor").value;
  document.getElementById("marqueeText").setAttribute("bgcolor", backgroundColor);
}

function fillTextColor() {
  let marqueeText = document.getElementById("marqueeText");
  let textColor = document.getElementById("textColor").value;
  
  marqueeText.style.color = textColor;

}

function changeScrollSpeed(speedValue) {
  document
    .getElementById("marqueeText")
    .setAttribute("scrollamount", speedValue);
}

function changeDirection(direction) {
  document
  .getElementById("marqueeText")
  .setAttribute("direction", direction);
}



