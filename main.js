let scoreTrue = 0, scoreFalse = 0, randomWord;

function randomWord_fun() {
	randomWord = Math.round(Math.random() * 13);
	document.getElementById("main-word").innerHTML = en_wordBase[randomWord];
}
randomWord_fun();

function startCheck() {
	let inp_data = document.getElementById('inp-one').value.toLowerCase();
	let trigger = document.getElementById("trigger-block");

	if (inp_data == ru_wordBase[randomWord]) {
		scoreTrue++;
		document.getElementById("true-block").innerHTML = `True: ${scoreTrue}`;
		document.getElementById('inp-one').value = "";

		trigger.style = "transform: translateY(450px); border: 3px solid white; background: green; color: white;";
		trigger.innerHTML = "Правильно";
		setTimeout(() => {trigger.style = "transform: translateY(350px); border: 3px solid white; background: green; color: white;"}, 1000);

		randomWord_fun();
	} else {
		scoreFalse++;
		document.getElementById("false-block").innerHTML = `False: ${scoreFalse}`;
		document.getElementById('inp-one').value = "";

		trigger.style = "transform: translateY(450px); border: 3px solid white; background: maroon; color: white;";
		trigger.innerHTML = "Неправильно";
		setTimeout(() => {trigger.style = "transform: translateY(350px); border: 3px solid white; background: maroon; color: white;"}, 1000);

		randomWord_fun();
	}
}

document.getElementById('start-btn').addEventListener('click', function(e) {startCheck();});


