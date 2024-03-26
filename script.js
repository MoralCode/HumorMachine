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


const djPunGenerateBtn = document.getElementById('generate-dj-puns-btn');
const djPunWordContainer = document.getElementById('dj-pun-container');



function addPunToContainer(pun, container) {
	// Create details element to reveal the pun
	var details = document.createElement("details");

	// Create summary element
	var summary = document.createElement("summary");
	summary.textContent = pun.setup;
	
	// Create punchline element
	var punchline = document.createElement("p");

	punchline.textContent = pun.punchline;

	//Append summary and punchline to details
	details.appendChild(summary);
	details.appendChild(punchline);

	// Append details to page
	container.appendChild(details);
}

var dwaynePuns = [
	{
		setup: "What would you call Dwayne Johnson if he was a Trekkie/star trek fan?",
		punchline: "Dwayne the Spock Johnson"},
	{
		setup: "What would you call Dwayne Johnson if he slipped down a hill?",
		punchline: "Rockslide"},
	{
		setup: "What do you call Dwayne Johnson with a black belt?",
		punchline: "Dwayne \"The block\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he doesnt want to see someone on social media anymore?",
		punchline: "Dwayne \"The block\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson rolling down a hill?",
		punchline: "Rock n’ Roll"},
	{
		setup: "What do you call Dwayne Johnson in a rooster costume?",
		punchline: "Dwayne \"the Cock\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson the gun enthusiast?",
		punchline: "Dwayne \"the glock\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson if he was an avian predator?",
		punchline: "Dwayne \"the hawk\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he visits someone’s house?",
		punchline: "Dwayne the knock Johnson"},
	{
		setup: "What do you call Dwayne Johnson with tortilla chips?",
		punchline: "Dwayne \"the guac[amole]\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he goes for a gentle stroll?",
		punchline: "Dwayne the walk Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he is on time?",
		punchline: "Dwayne \"the clock\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he is holding onto a boat?",
		punchline: "Dwayne the dock Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he‘s staring at something in amazement?",
		punchline: "Dwayne the gawk Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he gets high?",
		punchline: "Stoned"},
	{
		setup: "What do you call Dwayne Johnson when he is protecting his stuff?",
		punchline: "Dwayne \"the lock\" Johnson"},
	{
		setup: "What do you call an athletic Dwayne Johnson?",
		punchline: "Dwayne \"the jock\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson if he was a supermarket?",
		punchline: "Dwayne the stock Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he is keeping food in a bag/storing leftovers?",
		punchline: "Dwayne \"the ziplock\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he is trying to debug something/the system admin/tree?",
		punchline: "Dwayne \"the log\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson the house elf?",
		punchline: "Dwayne \"the sock\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson the handgun enthusiast?",
		punchline: "Dwayne \"the glock\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he comes to visit?",
		punchline: "Dwayne \"the knock knock\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he works as a student employee?",
		punchline: "Dwayne \"the on the clock\" Johnson"},
	{
		setup: "What do you call Dwayne Johnson when he's a social media star?",
		punchline: "Dwayne \"the Tik Tok\" Johnson"},
];


djPunGenerateBtn.addEventListener('click', () => {
	// get the number of puns to generate from the input field
	const numPuns = parseInt(document.getElementById('num-dj-puns').value);

	for (let i = 0; i < numPuns; i++) {
		const randomIndex = Math.floor(Math.random() * dwaynePuns.length);
		const pun = dwaynePuns[randomIndex]
		
		addPunToContainer(pun, djPunWordContainer);
	}

});
