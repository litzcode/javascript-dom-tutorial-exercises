let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let newlistitem = document.createElement("li");
	newlistitem.innerHTML = "Fourth element";
	let mylist = document.querySelector("#myList");
	mylist.appendChild(newlistitem);
});
