const generateBtn = document.getElementById('generate-btn');
const wordContainer = document.getElementById('word-container');

generateBtn.addEventListener('click', () => {
	// get the number of words to generate from the input field
	const numWords = parseInt(document.getElementById('num-words').value);

	var wordlistStr = `
doctor
sir
professor
coach
verner von
His majesty
Queen
King
Mrs
Prince
Princess
President
Vice principal
Senator
Lord
Lady
Secretary
Congressman
Representative
MP
Judge
Prime minister
Minister
Principal
Vice president
Speaker
Chef
Warden

stephen
evelyn
martin
randolph
richard
suzanne
rachel
Jared
Barnaby
Elizabeth
Harold
Sarah
Kevin
Aaron
Tina

meatballs
lasagne
sauerkraut
dishwasher
refridgerator
Spinach
Crackers
Biscuit
Meatloaf
Sandwich
Futon
Hotdog
Tofu
Custard
Jell-O
Horseradish
Beetroot
Potato
Cookie
Chicken
Rooster
Turkey
Cheesecake
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
