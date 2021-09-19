const input = document.getElementById('type');
const enter = document.getElementById('enter');
let data = {text: '', num: 0};

function getText() {
	data.num= input.value
	fetch(`http://numbersapi.com/${ data.num }`)
		.then(response=> response.text())
		.then(response=> data.text=response)
		.then(response=> document.getElementById('show').innerText = data.text);
}

function checkLength() {
	input.value.length===0 ? alert('You should type number in the searchbox') : getText();
}

enter.addEventListener("click", function() {
	checkLength();
})


input.addEventListener("keypress", function() {
	if (event.keyCode===13) {
		checkLength();
	}
})