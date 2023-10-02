var buttonColours=["red","blue","green","yellow"]; 
var gamePattern = [];
 var userClickedPattern=[];
 var level=0;
 var l=0;



 $(document).on("keypress",function pressKey(){
    if(l === 0){
        $("h1").text("Level "+level);
        nextSequence();
        l++;
    }
    console.log(level);
});




 $(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
});





function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);

    var randomNumber= Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
console.log(randomChosenColour)


$("#"+randomChosenColour).fadeOut(100).fadeIn(100);


var path="./sounds/"+randomChosenColour+".mp3";
var audio=new Audio(path);
audio.play();

// switch (s) {
//     case "#red":
//         var audio= new Audio("./sounds/red.mp3");
//         audio.play();
//         break;
//     case "#yellow":
//         var audio= new Audio("./sounds/yellow.mp3");
//         audio.play();
//         break;
//     case "#green":
//         var audio= new Audio("./sounds/green.mp3");
//         audio.play();
//         break;
//     case "#blue":
//         var audio= new Audio("./sounds/blue.mp3");
//         audio.play();
//         break;

//     default:
//         break;
// }

    


}

function checkAnswer(currentLevel){
    console.log(currentLevel);

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success")

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);

        $("h1").text("Game Over, Press Any Key to Restart")

        var path="./sounds/wrong.mp3";
        var audio=new Audio(path);
        audio.play();
        console.log("wrong")
        startOver();
    }
}





function playSound(name){

    var path="./sounds/"+name+".mp3";
    var audio=new Audio(path);
    audio.play();
}


function animatePress(currentColour){

var currentColour = $("#"+currentColour);
currentColour.addClass("pressed");

setTimeout(function(){
    currentColour.removeClass("pressed");
},100);
}





function startOver(){
    level=0;
    l=0;
    gamePattern=[];
} 