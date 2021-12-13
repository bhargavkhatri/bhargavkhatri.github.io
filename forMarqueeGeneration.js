function fillBackgroundColor() {
  let backgroundColor = document.getElementById("backgroundColor").value;
  document
    .getElementById("marqueePreview")
    .setAttribute("bgcolor", backgroundColor);
}

function changeMarqueeText(marqueeText) {
  document.getElementById("marqueePreview").innerHTML = marqueeText;
}

function selectTextStyle() {
  let marqueePreview = document.getElementById("marqueePreview");
  let textStyle = document.getElementById("textStyle");
  if (textStyle.checked) {
    marqueePreview.style.fontStyle = textStyle.value;
  } else {
    marqueePreview.style.fontStyle = "normal";
  }
}

function selectTextWeight() {
  let marqueePreview = document.getElementById("marqueePreview");
  let textWeight = document.getElementById("textWeight");
  if (textWeight.checked) {
    marqueePreview.style.fontWeight = textWeight.value;
  } else {
    marqueePreview.style.fontWeight = "normal";
  }
}

function fillTextColor() {
  let marqueePreview = document.getElementById("marqueePreview");
  let textColor = document.getElementById("textColor").value;

  marqueePreview.style.color = textColor;
}

function changeScrollSpeed(speedValue) {
  document
    .getElementById("marqueePreview")
    .setAttribute("scrollamount", speedValue);
}

function changeMarqueeBehaviour(behaviourValue) {
  document
    .getElementById("marqueePreview")
    .setAttribute("behavior", behaviourValue);
}

function changeTextSize(textSizeValue) {
  let marqueePreview = document.getElementById("marqueePreview");
  marqueePreview.style.fontSize = textSizeValue;
}

function changeDirection(direction) {
  document
    .getElementById("marqueePreview")
    .setAttribute("direction", direction);
}
