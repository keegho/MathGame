var browserHeight = window.innerHeight || document.documentElement.clientHeight;
var browserWidth = window.innerWidth || document.documentElement.clientWidth;

document.getElementById("container").style.width = browserWidth + "px";
document.getElementById("container").style.height = browserHeight + "px";

document.getElementById("resetStart").innerHTML = "<p>Start Game</p>";


var time = document.getElementById("time");
var timer = 10;
var score = 0;
var solution;
var rightChoicePosition;

var isPlaying = false;

function startGame() {
    //Initialization
    timer = 10;
    score = 0;
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("scoreValue").innerHTML = score;

    //Check if playing or a new game starting
    if (isPlaying == false) {
        isPlaying = true;
        document.getElementById("timeBox").style.display = "block";
        document.getElementById("resetStart").innerHTML = "<p>Reset Game</p>";

        var counter = setInterval(function (){
            timer--;
            time.innerHTML = timer;
            if (timer == 0) {
                clearInterval(counter);
                document.getElementById("gameOver").style.display = "block";
                document.getElementById("finalScore").innerHTML = score;
                document.getElementById("resetStart").innerHTML = "<p>Start Game</p>";
                isPlaying = false;
            }
        },1000);

         solution = randomNumbers();
         randomChoices(solution);

    } else {
        score = 0;
        timer = 10;
        document.getElementById("scoreValue").innerHTML = score;
        solution = randomNumbers();
        randomChoices(solution);
    }
}

//Checking the click location
function check(clicked_Id) {

    if (isPlaying == true) {

        if (clicked_Id == rightChoicePosition) {
            document.getElementById("statusCorrect").style.display = "block";
            score++;
            timer = 10;
            document.getElementById("scoreValue").innerHTML = score;
            setTimeout(function (){
                document.getElementById("statusCorrect").style.display = "none";
                solution = randomNumbers();
                randomChoices(solution);
            },1000);
        } else {
            document.getElementById("statusTryagain").style.display = "block";
            setTimeout(function (){
                document.getElementById("statusTryagain").style.display = "none";
            },1000);
        }
    }
}

//Random numbers for the multiplication
function randomNumbers (){
    var firstNum = Math.floor(Math.random()*11);
    var secondNum = Math.floor(Math.random()*11);
    document.getElementById("firstNumber").innerHTML = firstNum;
    document.getElementById("secondNumber").innerHTML = secondNum;

    return firstNum*secondNum;
}

//Random location choices
function randomChoices (rightSolution) {

    var choicePosition = Math.floor(Math.random()*4);

    for(i=0; i<4; i++) {
        if (choicePosition == i){
            document.getElementById("choice"+ choicePosition).innerHTML = rightSolution;
        } else {
            var random =  Math.floor(Math.random()*101);
            if(random != choicePosition){
                document.getElementById("choice"+ i).innerHTML = random;
            } else {
                document.getElementById("choice"+ i).innerHTML = Math.floor(Math.random()*101);
            }
            //window.console.log(typeof(random));
        }
    }
    rightChoicePosition = "choice" + choicePosition;
    window.console.log("choice"+choicePosition);
    //return "choice" + choicePosition;

}






