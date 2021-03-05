let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let onClickDiv = document.createElement("div");
	onClickDiv.innerHTML = "Hello World";
	onClickDiv.style.background = "yellow";
	document.body.appendChild(onClickDiv);
});
