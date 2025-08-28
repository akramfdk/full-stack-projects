let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.body;
let text = document.querySelector("h3");
let select = document.querySelector("select");
let random_button = document.querySelector("#random-color");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateBackground(){
    let colorValue = `linear-gradient(${select.value}, ${color1.value}, ${color2.value})`;
    body.style.background = colorValue;
    text.textContent = body.style.background + ";";
}

function generateRandomBackground(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    updateBackground();
}

function copyToClipboard(){
    navigator.clipboard.writeText(text.textContent);
    alert("Gradient string to Clipboard");
}

color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
select.addEventListener("input", updateBackground);
random_button.addEventListener("click", generateRandomBackground);
text.addEventListener("click", copyToClipboard);

generateRandomBackground();