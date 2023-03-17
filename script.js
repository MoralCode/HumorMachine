const generateBtn = document.getElementById('generate-btn');
const wordContainer = document.getElementById('word-container');

generateBtn.addEventListener('click', () => {
	// get the number of words to generate from the input field
	const numWords = parseInt(document.getElementById('num-words').value);

	var wordlistStr = `doctor
sir
professor
coach
verner von

stephen
evelyn
martin

meatballs
lasagne
sauerkraut
dishwasher
`;
	// split the wordlist string into an array of wordlists
	let wordlists = wordlistStr.trim().replace(/\n{2}/g, '~').split('~');
	console.log(wordlists)
	wordlists = wordlists.map(i =>i.split("\n"))


	// generate the random words
	const words = [];
	for (let i = 0; i < numWords; i++) {
		const word = []
		for (let j = 0; j < wordlists.length; j++) {
			let wordlist = wordlists[j]
			const randomIndex = Math.floor(Math.random() * wordlist.length);
			word.push (wordlist[randomIndex]);
		}
		words.push(word.join(" "));
	}

	// update the word container element with the generated words
	wordContainer.innerHTML = words.join(' <br>');

});
