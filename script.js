const input = document.getElementById('type');
const enter = document.getElementById('enter');
let data ={text: '', num: input.value};

function getText() {
	data.num= input.value
	fetch(`http://numbersapi.com/${data.num}`)
	 .then(response=> document.getElementById('show').innerText = response.text())
	 .then(console.log)
}

function checkLength(){
	input.value.length===0 ? alert('You should type number in the searchbox') : getText();
}

enter.addEventListener("click", function() {
	getText();
})

input.addEventListener("keypress", function() {
	if (event.keyCode===13) {
		getText();
	}
})

