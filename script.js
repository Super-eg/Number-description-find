const input = document.getElementById('type');
const enter = document.getElementById('enter');
let data = {text: '', num: 0};

function delay(tx, tm) {
	setTimeout(function() {
		document.getElementById('show').innerText = tx;
	}, tm);
}

function getText() {
	data.num= input.value
	fetch(`http://numbersapi.com/${ data.num }`)
		.then(response=> response.text())
		.then(response=> data.text=response);
	let mes= 'wait';
	let time= 0;
	for (let i=0; i<3; i++) {
		time+= 500;
		mes+= '..';
		delay(mes, time);
	};
	setTimeout(function() {
		document.getElementById('show').innerText = data.text;
	}, 1800);
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