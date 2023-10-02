
let input = document.querySelector("input");
let btns = document.querySelectorAll("button");
btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		input.innerText = "";
		// console.log(btn.innerText);
		if (btn.innerText === "AC") {
			input.value = "";
		} else if (btn.innerText == "DL") {
			input.value = input.value.slice(0, -1);
		} else if (btn.innerText === "=") {
			input.value = eval(input.value);
		} else {
			input.value += btn.innerText;
		}
	});
});
