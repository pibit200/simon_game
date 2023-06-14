var buttonColors=["red","green","blue","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;

var started = false;
var level = 0;
$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(event){
    var userChosenColor=event.target.id;
    userClickedPattern.push(userChosenColor);
   playsound(userChosenColor);
    animatePress(userChosenColor);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1);


});
function checkAnswer(currentLevel)
{

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        if (userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
        playsound("wrong");
        $('body').addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
    
        $("#level-title").text("Game Over, Press Any Key to Restart");
          startover();
      }


}



function nextSequence()
{
     userClickedPattern=[];

    level++;

    $("#level-title").text("Level " + level);

    var randomnumber=Math.floor(Math.random()*4);
   
    var randomChosenColor=buttonColors[randomnumber];

    gamePattern.push(randomChosenColor);



    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

   playsound(randomChosenColor);

}

function playsound(name)
{

    const audio=new Audio("sounds/"+name+".mp3");
    audio.play();

}







function animatePress(currentColor)
{
        $('#'+currentColor).addClass("pressed");
        setTimeout(function(){
            $('#'+currentColor).removeClass("pressed");
        }, 100);
}


function startover()
{
    level=0;
    gamePattern=[];
 userClickedPattern=[];
 started=false;

}