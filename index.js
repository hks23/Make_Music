//JAVA SCRIPT
var numberofkeys  = document.querySelectorAll(".drum").length;
for(var i=0;i<numberofkeys;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var key=this.innerHTML;
    makeSound(key);
    changeColor(key);
    //toggleColor();

    //this.style.color="red";
  });
}

document.addEventListener("keydown",function(event)
{
  makeSound(event.key);
  changeColor(event.key);
});

function makeSound(key){
  key=key.toLowerCase();
  switch (key) {
    case 'w':
    var audio= new Audio("sounds/crash.mp3");
    audio.play();

    break;

    case 'a':
    var audio= new Audio("sounds/kick-bass.mp3");
    audio.play();

    break;

    case 's':
    var audio= new Audio("sounds/snare.mp3");
    audio.play();

    break;

    case 'd':
    var audio= new Audio("sounds/tom-1.mp3");
    audio.play();

    break;

    case 'j':
    var audio= new Audio("sounds/tom-2.mp3");
    audio.play();

    break;

    case 'k':
    var audio= new Audio("sounds/tom-3.mp3");
    audio.play();

    break;

    case 'l':
    var audio= new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
  }
}

function changeColor(key) {
  key=key.toLowerCase();
  //setTimeout(toggleColor, 3000);
  // console.log("hello");
  switch (key) {

    case 'w':
    var button = document.getElementById("myButton1");
    console.log(button);
    if (button.style.color === "hotpink") {button.style.color = "#9cacce";}
    else                                  {button.style.color = "hotpink";}
    break;

    case 'a':
    var button = document.getElementById("myButton2");
    if (button.style.color === "hotpink") {button.style.color = "#9cacce";}
    else                                  {button.style.color = "hotpink";}
      break;

    case 's':
    var button = document.getElementById("myButton3");
    if (button.style.color === "hotpink") {button.style.color = "#9cacce";}
    else                                  {button.style.color = "hotpink";}
      break;

      case 'd':
      var button = document.getElementById("myButton4");
      console.log(button);
      if (button.style.color === "hotpink") {button.style.color = "#9cacce";}
      else                                  {button.style.color = "hotpink";}
      break;

      case 'j':
      var button = document.getElementById("myButton5");
      if (button.style.color === "hotpink") {button.style.color = "#9cacce";}
      else                                  {button.style.color = "hotpink";}
        break;

      case 'k':
      var button = document.getElementById("myButton6");
      if (button.style.color === "hotpink") {button.style.color = "#9cacce";}
      else                                  {button.style.color = "hotpink";}
        break;

      case 'l':
        var button = document.getElementById("myButton7");
        if (button.style.color === "hotpink") {button.style.color = "#9cacce";}
        else                                  {button.style.color = "hotpink";}
          break;
}
}

function toggleColor() {
  var button = document.getElementById("title");
  if (button.style.color === "#9cacce") {
    button.style.color = "yellow";
  } else {
    button.style.color = "#9cacce";
  }
  setTimeout(toggleColor, 1000); // Change color every second
}
