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
const allDjPunsBtn = document.getElementById("generate-all-dj-puns-btn");


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

class DwaynePun {
	constructor(setup, punchline, source = "", is_alternative = false) {
		this.setup = setup;
		this.punchline = punchline;
		this.source = source;
		this.is_alternative = is_alternative;
	}

}


var dwaynePuns = [

	new DwaynePun("What would you call Dwayne Johnson if he was a Trekkie/star trek fan?", "Dwayne \"the Spock\" Johnson"),
	new DwaynePun("What would you call Dwayne Johnson if he slipped down a hill?", "Rockslide", "", true),
	new DwaynePun("What do you call Dwayne Johnson with a black belt?", "Dwayne \"The block\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he doesnt want to see someone on social media anymore?", "Dwayne \"The block\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson rolling down a hill?", "Rock n’ Roll", "", true),
	new DwaynePun("What do you call Dwayne Johnson in a rooster costume?", "Dwayne \"the Cock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson the gun enthusiast?", "Dwayne \"the glock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson if he was an avian predator?", "Dwayne \"the hawk\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he visits someone’s house?", "Dwayne the knock Johnson"),
	new DwaynePun("What do you call Dwayne Johnson with tortilla chips?", "Dwayne \"the guac[amole]\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he goes for a gentle stroll?", "Dwayne the walk Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he is on time?", "Dwayne \"the clock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he is holding onto a boat?", "Dwayne \"the Dock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he‘s staring at something in amazement?", "Dwayne the gawk Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he gets high?", "Stoned", "", true),
	new DwaynePun("What do you call Dwayne Johnson when he is protecting his stuff?", "Dwayne \"the lock\" Johnson"),
	new DwaynePun("What do you call an athletic Dwayne Johnson?", "Dwayne \"the jock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson if he was a supermarket?", "Dwayne \"the Stock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson the investor?", "Dwayne \"the Stock\" Johnson", "https://www.reddit.com/r/MemeEconomy/comments/6guj6t/dwayne_the_rock_johnson_memes_on_the_rise/"),
	new DwaynePun("What do you call Dwayne Johnson when he is keeping food in a bag/storing leftovers?", "Dwayne \"the ziplock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he is trying to debug something/the system admin/tree?", "Dwayne \"the log\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson the house elf?", "Dwayne \"the sock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson the handgun enthusiast?", "Dwayne \"the glock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he comes to visit?", "Dwayne \"the knock knock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he works as a student employee?", "Dwayne \"the on the clock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he's a social media star?", "Dwayne \"the Tik Tok\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he plays Minecraft?", "Dwayne \"the Bedrock\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he plays Minecraft?", "Dwayne \"the Block\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he wears closed-toed sandals?", "Dwayne \"the Croc\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson the marine animal?", "The Rock-topus", "", true),
	new DwaynePun("What do you call Dwayne Johnson after spending many extra years in school?", "Dwayne \"the Postdoc\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson after quitting wrestling to pursue more classical interests?", "Dwayne \"the Bach\" Johnson"),
	new DwaynePun("What do you call Dwayne Johnson when he is helping make a large stir fry?", "Dwayne \"the Wok\" Johnson", "https://www.reddit.com/r/me_irl/comments/6gn3ph/me_irl/"),
	new DwaynePun("What do you call Dwayne Johnson humorously pretenting to be something he is not?", "Dwayne \"the Mock\" Johnson", "https://knowyourmeme.com/photos/1362206-dwayne-the-rock-johnson-rhymes"
),
	new DwaynePun("What do you call Dwayne Johnson keeping his kid safe from unnecessary dirt?", "Dwayne \"the Smock\" Johnson", "https://knowyourmeme.com/photos/1275520-dwayne-the-rock-johnson-rhymes"),
	new DwaynePun("What do you call Dwayne Johnson when he takes 6-8 hours to cook his food?", "Dwayne \"the Crock [Pot]\" Johnson", "https://knowyourmeme.com/photos/1265292-dwayne-the-rock-johnson-rhymes"),

];


djPunGenerateBtn.addEventListener('click', () => {
	djPunWordContainer.innerHTML = "";
	// get the number of puns to generate from the input field
	const numPuns = parseInt(document.getElementById('num-dj-puns').value);

	for (let i = 0; i < numPuns; i++) {
		const randomIndex = Math.floor(Math.random() * dwaynePuns.length);
		const pun = dwaynePuns[randomIndex]
		
		addPunToContainer(pun, djPunWordContainer);
	}

});

allDjPunsBtn.addEventListener('click', () => {
	djPunWordContainer.innerHTML = "";
	for (const pun of dwaynePuns) {	
		addPunToContainer(pun, djPunWordContainer);
	}
});

