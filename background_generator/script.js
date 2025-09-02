const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.body;
const text = document.querySelector("h3");
const select = document.querySelector("select");
const random_button = document.querySelector("#random-color");

getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

updateBackground = () => {
    let colorValue = `linear-gradient(${select.value}, ${color1.value}, ${color2.value})`;
    body.style.background = colorValue;
    text.textContent = body.style.background + ";";
}

generateRandomBackground = () => {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    updateBackground();
}

copyToClipboard = () => {
    navigator.clipboard.writeText(text.textContent);
    alert("Gradient string to Clipboard");
}

color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
select.addEventListener("input", updateBackground);
random_button.addEventListener("click", generateRandomBackground);
text.addEventListener("click", copyToClipboard);

generateRandomBackground();