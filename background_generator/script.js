let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.body;
let text = document.querySelector("h3");
let select = document.querySelector("select");

function updateBackground(){
    let colorValue = `linear-gradient(${select.value}, ${color1.value}, ${color2.value})`;
    body.style.background = colorValue;
    text.textContent = body.style.background + ";";
}


color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
select.addEventListener("input", updateBackground);
updateBackground();