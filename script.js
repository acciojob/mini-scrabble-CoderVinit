//your code here
let h2 = document.getElementById("letterCount");

document.getElementById("evaluatedText").oninput = function(){
	let val = this.value;

	if(val === ""){
		h2.textContent = 0
	}

	h2.textContent = val.length;
}
