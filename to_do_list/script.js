var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li_items = document.querySelectorAll("li");
var message = document.querySelector("#message");

function checkEmptyList(){
	if (ul.children.length !== 0){
		message.classList.add("hide");
	}else{
		message.classList.remove("hide");
	}
}

function inputLength() {
	return input.value.trim().length;
}

function createListElement() {
	var li = document.createElement("li");

	var spn = document.createElement("span");
	spn.textContent = input.value;

	var btn = document.createElement("button");
	btn.textContent = "Delete";
	
	li.appendChild(spn);
	li.appendChild(btn);

	ul.appendChild(li);
	checkEmptyList();

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", function(event){
	if (event.target.tagName === "SPAN"){
		event.target.classList.toggle("done");
	}
	if (event.target.tagName === "BUTTON"){
		event.stopPropagation();
		event.target.parentElement.remove();
		checkEmptyList();
	}
});

checkEmptyList();