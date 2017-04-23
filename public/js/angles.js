$(document).ready(function(){
		draw();
});

//function draw
function draw() {
	//triangle 1
	var x11 = Math.floor(Math.random() * (200 - 150 + 10)) + 150
		var y11 = Math.floor(Math.random() * (200 - 100 + 10)) + 10
		var x12 = Math.floor(Math.random() * (200 - 150 + 10)) + 150
		var y12 = Math.floor(Math.random() * (200 - 100 + 10)) + 10

		//triangle 2
		var x21 = Math.floor(Math.random() * (400 - 350 + 10)) + 350
		var y21 = Math.floor(Math.random() * (200 - 100 + 10)) + 20
		var x22 = Math.floor(Math.random() * (400 - 350 + 10)) + 350
		var y22 = Math.floor(Math.random() * (200 - 100 + 10)) + 20
		//triangle 3
		var x31 = Math.floor(Math.random() * (800 - 750 + 10)) + 500
		var y31 = Math.floor(Math.random() * (600 - 500 + 10)) + 20
		var x32 = Math.floor(Math.random() * (800 - 750 + 10)) + 500
		var y32 = Math.floor(Math.random() * (600 - 500 + 10)) + 20
		//triangle 4
		var x41 = Math.floor(Math.random() * (950 - 880 + 10)) + 700
		var y41 = Math.floor(Math.random() * (700 - 650 + 10)) + 20
		var x42 = Math.floor(Math.random() * (950 - 880 + 10)) + 700
		var y42 = Math.floor(Math.random() * (700 - 650 + 10)) + 20

    
    var maxAngle = 0;
    var maxAngleAnswer = "";
    var minAngle = 360;
    var minAngleAnswer = "";
    //calculate angle A    
    var A12 = Math.sqrt(Math.pow((x11 - 100), 2) + Math.pow((y11 - 15), 2));
	var A13 = Math.sqrt(Math.pow((x11 - x12), 2) + Math.pow((y11 - y12), 2));
	var A23 = Math.sqrt(Math.pow((100 - x12), 2) + Math.pow((15 - y12), 2));
	var resultDegreeA = Math.acos(((Math.pow(A12, 2)) + (Math.pow(A13, 2)) - (Math.pow(A23, 2))) / (2 * A12 * A13)) * 180 / Math.PI;

	document.getElementById('A').innerHTML = "A = " + (resultDegreeA.toFixed(2))
    
    if(resultDegreeA > maxAngle){
        maxAngleAnswer = "A"
        maxAngle = resultDegreeA
    }
    
    if(resultDegreeA < minAngle){
        minAngleAnswer = "A"
        minAngle = resultDegreeA
    }

    //calculate angle B

    var B12 = Math.sqrt(Math.pow((x21 - 300), 2) + Math.pow((y21 - 50), 2));
	var B13 = Math.sqrt(Math.pow((x21 - x22), 2) + Math.pow((y21 - y22), 2));
	var B23 = Math.sqrt(Math.pow((300 - x22), 2) + Math.pow((50 - y22), 2));
	var resultDegreeB = Math.acos(((Math.pow(B12, 2)) + (Math.pow(B13, 2)) - (Math.pow(B23, 2))) / (2 * B12 * B13)) * 180 / Math.PI;

	document.getElementById('B').innerHTML = "B = " + (resultDegreeB.toFixed(2))
    
    if(resultDegreeB > maxAngle){
        maxAngleAnswer = "B"
        maxAngle = resultDegreeB
    }
    
    if(resultDegreeB < minAngle){
        minAngleAnswer = "B"
        minAngle = resultDegreeB
    }

		//calculate angle C

		var C12 = Math.sqrt(Math.pow((x31 - 500), 2) + Math.pow((y31 - 50), 2));
	var C13 = Math.sqrt(Math.pow((x31 - x32), 2) + Math.pow((y31 - y32), 2));
	var C23 = Math.sqrt(Math.pow((500 - x32), 2) + Math.pow((50 - y32), 2));
	var resultDegreeC = Math.acos(((Math.pow(C12, 2)) + (Math.pow(C13, 2)) - (Math.pow(C23, 2))) / (2 * C12 * C13)) * 180 / Math.PI;

	document.getElementById('C').innerHTML = "C = " + (resultDegreeC.toFixed(2))
    
    if(resultDegreeC > maxAngle){
        maxAngleAnswer = "C"
        maxAngle = resultDegreeC
    }
    
    if(resultDegreeC < minAngle){
        minAngleAnswer = "C"
        minAngle = resultDegreeC
    }

		//calculate angle D

    var D12 = Math.sqrt(Math.pow((x41 - 700), 2) + Math.pow((y41 - 50), 2));
	var D13 = Math.sqrt(Math.pow((x41 - x42), 2) + Math.pow((y41 - y42), 2));
	var D23 = Math.sqrt(Math.pow((700 - x42), 2) + Math.pow((50 - y42), 2));
	var resultDegreeD = Math.acos(((Math.pow(D12, 2)) + (Math.pow(D13, 2)) - (Math.pow(D23, 2))) / (2 * D12 * D13)) * 180 / Math.PI;


	document.getElementById('D').innerHTML = "D = " + (resultDegreeD.toFixed(2))
    
    if(resultDegreeD > maxAngle){
        maxAngleAnswer = "D"
        maxAngle = resultDegreeD
    }
    
    if(resultDegreeD < minAngle){
        minAngleAnswer = "D"
        minAngle = resultDegreeD
    }
    
    var canvas = document.getElementById('canvas');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');

		ctx.beginPath();
		ctx.moveTo(250, 0);
		ctx.lineTo(250, 150);
		ctx.stroke(); 

		ctx.beginPath();
		ctx.moveTo(450, 0);
		ctx.lineTo(450, 150);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(650, 0);
		ctx.lineTo(650, 150);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(100, 15);
		ctx.lineTo(x11, y11);
		ctx.lineTo(x12, y12);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(300, 50);
		ctx.lineTo(x21, y21);
		ctx.lineTo(x22, y22);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(500, 50);
		ctx.lineTo(x31, y31);
		ctx.lineTo(x32, y32);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(700, 50);
		ctx.lineTo(x41, y41);
		ctx.lineTo(x42, y42);
		ctx.stroke();

	}
    
    
    
    var choices = ["A", "B", "C", "D"]
    var choiceToDegree = {};
    choiceToDegree["A"] = resultDegreeA
    choiceToDegree["B"] = resultDegreeB
    choiceToDegree["C"] = resultDegreeC
    choiceToDegree["D"] = resultDegreeD
   
    
    var indexToRemove1 = choices.indexOf(maxAngleAnswer)
    choices.splice(indexToRemove1, 1)
    var indexToRemove2 = choices.indexOf(minAngleAnswer)
        choices.splice(indexToRemove2, 1)

    
    var answer1;
    var answer2;
    var answer3;
    var answer4;
    
    var correctAnswer;
    if(choiceToDegree[choices[0]] < choiceToDegree[choices[1]]){
        correctAnswer = minAngleAnswer +"< "+ choices[0] + "< " + choices[1] + "< " + maxAngleAnswer 
        answer1 = choices[0] +"< "+ minAngleAnswer + "< " + choices[1] + "< " +maxAngleAnswer
        answer2 = choices[0] +"< "+ minAngleAnswer + "< " + maxAngleAnswer  + "< " + choices[1]
        answer3 = minAngleAnswer +"< "+ choices[0] + "< " + choices[1] + "< " + maxAngleAnswer 
        answer4 = minAngleAnswer +"< "+ choices[0] + "< " + maxAngleAnswer + "< " + choices[1] 
    }
    else{
        correctAnswer = minAngleAnswer +"< "+ choices[1] + "< " + choices[0] + "< " + maxAngleAnswer 
        answer1 = choices[1] +"< "+ minAngleAnswer + "< " + choices[0] + "< " +maxAngleAnswer
        answer2 = choices[1] +"< "+ minAngleAnswer + "< " + maxAngleAnswer  + "< " + choices[0]
        answer3 = minAngleAnswer +"< "+ choices[1] + "< " + choices[0] + "< " + maxAngleAnswer 
        answer4 = minAngleAnswer +"< "+ choices[1] + "< " + maxAngleAnswer + "< " + choices[0] 
    }

    var answers = [answer1, answer2, answer3, answer4]
    var shuffledAnswers = shuffle(answers)
    

    
  
    
    
    createAnswers(shuffledAnswers, correctAnswer);

}

 // Creates a list of the answer choices as radio inputs
function createAnswers(answers, correctanswer) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < answers.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += answers[i];
      item.append(input);
      radioList.append(item);
    }
    $("#choices").append(radioList);
    
    var correctAnswer = '<p>' +"Correct Answer is "+ correctanswer + "</p>"
    $("#choices").append(correctAnswer);
}

//Implementation of the Fisher Yates Shuffle Algorithm
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

////////////////////Sort array//////////////////////

var array = [5,7,8,2,3,1,6];
var temp;
function sort(array) {
	for(var i=0; i<array.length; i++) {
		for (var j=0; j<array.length; j++) {
			if (array[i] < array[j] && i!=j) {
				temp = array[j];
				array[j] = array[i];
				array[i] = temp;

			}   

		}
	}
	return array;
}

var sortedArray = sort(array);
document.getElementById('results').innerHTML += sortedArray;

function showAnswer() {
	var x = document.getElementById('showResult');
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}



	}
}

//highjghjghjghj/////////////////////// TYPING THINGY
 -
 -var temp = document.querySelector('.time');
 -var button = document.querySelector("button");
 -var words = document.querySelector(".words");
 -var timerDiv = document.querySelector(".time");
 -var scoreDiv = document.querySelector(".score");
 -var points = 0;
 -var spans;
 -var typed;
 -var seconds = 60;
 -
 -function countdown() {
 -	points = 0;
 -	var timer = setInterval(function(){
 -			button.disabled = true;
 -			seconds--;
 -			temp.innerHTML = seconds;
 -			if (seconds === 0) {
 -			alert("Game over! Your score is " + points);
 -			scoreDiv.innerHTML = "0";
 -			words.innerHTML = "";
 -			button.disabled = false;
 -			clearInterval(timer);
 -			seconds = 60;
 -			timerDiv.innerHTML = "60";
 -			button.disabled = false;	
 -			}
 -			}, 1000);
 -}
 -
 -function random() {
 -	words.innerHTML = "";
 -	var random = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
 -	var wordArray = list[random].split("");
 -	for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
 -		var span = document.createElement("span");
 -		span.classList.add("span");
 -		span.innerHTML = wordArray[i];
 -		words.appendChild(span);
 -	}
 -	spans = document.querySelectorAll(".span");
 -}
 -
 -
 -const list = ['ABCD','ACDB','BCDA','ADCB']
  
 -button.addEventListener("click", function(e){
 -		countdown();
 -		random();
 -		button.disabled = true;	
 -		});
 -
 -
 -function typing(e) {
 -	typed = String.fromCharCode(e.which);
 -	for (var i = 0; i < spans.length; i++) {
 -		if	(spans[i].innerHTML === typed) { // if typed letter is the one from the word
 -			if (spans[i].classList.contains("bg")) { // if it already has class with the bacground color then check the next one
 -				continue;
 -			} else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
 -				spans[i].classList.add("bg");
 -				break;
 -			}
 -		}
 -	}
 -	var checker = 0;
 -	for (var j = 0; j < spans.length; j++) { //checking if all the letters are typed
 -		if (spans[j].className === "span bg") {
 -			checker++;
 -		}
 -		if (checker === spans.length) { // if so, animate the words with animate.css class
 -			spark.currentTime = 0;
 -			spark.play();
 -			words.classList.add("animated");
 -			words.classList.add("fadeOut");
 -			points++; // increment the points
 -			scoreDiv.innerHTML = points; //add points to the points div
 -			document.removeEventListener("keydown", typing, false);
 -			setTimeout(function(){
 -					words.className = "words"; // restart the classes
 -					random(); // give another word
 -					document.addEventListener("keydown", typing, false);
 -					}, 400);
 -		}
  
  	}
  }
  
 -document.addEventListener("keydown", typing, false); 
