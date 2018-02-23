var gameWords= ["drawings", "paintings", "sketches", "sculptures", "woodworkings"];
var number = 0;
var word = gameWords[Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++){
  answerArray[i] = "_";
}
var remaining = word.length;
var guess = "";
//builds the answer radio buttons
var underscoreBuilder = gameArray[number].question;
function wordBuilder() {
  for (var i = 0; i < questionListing.length; i++) {
    console.log("");
    console.log("question builder is working");
    }
}
wordBuilder();

function Word(w){
	this.arrayofLetters = [];

	for (var i=0; i < w.length; i++){
		this.arrayofLetters.push(new Letter (w[i]));
	}

	console.log(this.arrayofLetters);
}
