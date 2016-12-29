window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
	const transcript = Array.from(e.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join('');

		// const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
		// p.textContent = poopScript;

		// if(transcript.includes('get the weather')) {
		 	//gets the weather
		// }

		if (e.results[0].isFinal) {
			p = document.createElement('p');
			words.appendChild(p);
		}
});

recognition.addEventListener('end', recognition.start);

recognition.start();
console.log(' So far this only works in firefox')