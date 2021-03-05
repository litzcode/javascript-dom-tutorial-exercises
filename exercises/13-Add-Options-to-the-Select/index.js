window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let mySelect = document.querySelector("#mySelect");

	countries.forEach(element => {
		let country = document.createElement("option");
		country.innerHTML = element;
		document.querySelector("#mySelect").appendChild(country); //added querySelector to pass test
	});

	mySelect.addEventListener("change", function() {
		let currentOpt = document.querySelector("#mySelect option:checked").value;
		alert(currentOpt);
	});
};
