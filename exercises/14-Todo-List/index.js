// Your code here

let userInput = document.querySelector("#addToDo");

userInput.addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		//event.preventDefault();
		let text = userInput.value;
		let newlist = document.createElement("li");
		newlist.innerHTML = `<span><i class="fa fa-trash"></i></span> ${text}`;

		//Add 'click' event listener for new items to be able to be removed on click on icon
		newlist.addEventListener("click", function() {
			newlist.parentNode.removeChild(newlist);
		});
		document.querySelector("ul").appendChild(newlist);
	}
});

// SOLUTION USTING ".FA-TRASH" TO PASS TEST

let todolist = document.querySelectorAll(".fa-trash");
for (let i = 0; i < todolist.length; i++) {
	todolist[i].addEventListener("click", function() {
		todolist[i].parentNode.parentNode.parentNode.removeChild(todolist[i].parentNode.parentNode);
	});
}



// SOLUTION SELECTING ALL <LI> ELEMENTS
/*
let todolist = document.querySelectorAll("li");
for (let i = 0; i < todolist.length; i++) {
	todolist[i].addEventListener("click", function() {
		//this.closest("li").remove();
		todolist[i].parentNode.removeChild(todolist[i]);
	});
}*/

// SOLUTION USING "this.closest("li").remove();"
/*
let todolist = document.querySelectorAll("li");
for (let i = 0; i < todolist.length; i++) {
	todolist[i].addEventListener("click", function() {
		this.closest("li").remove();
	});
}*/
