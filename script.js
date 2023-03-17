const generateBtn = document.getElementById('generate-btn');
const wordContainer = document.getElementById('word-container');

generateBtn.addEventListener('click', () => {
	// get the number of words to generate from the input field
	const numWords = parseInt(document.getElementById('num-words').value);

	// load the wordlist from a text file using the Fetch API
	fetch('wordlist.txt')
		.then(response => response.text())
		.then(wordlistStr => {
			// split the wordlist string into an array of wordlists
			const wordlists = wordlistStr.trim().split('\n\n');



			// generate the random words
			const words = [];
			for (let i = 0; i < numWords; i++) {
				const word = []
				for (let j = 0; j < wordlists.length; j++) {

					const randomIndex = Math.floor(Math.random() * j);
					word.push (wordlists[j][randomIndex]);
				}
				words.push(word.join(" "));
			}

			// update the word container element with the generated words
			wordContainer.innerHTML = words.join(' ');
		})
		.catch(error => console.log(error));
});
