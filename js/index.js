
var btns = document.querySelectorAll(".drum");
var w = new Audio("./sounds/tom-1.mp3");
var a = new Audio("./sounds/tom-2.mp3");
var s = new Audio("./sounds/tom-3.mp3");
var d = new Audio("./sounds/tom-4.mp3");
var j = new Audio("./sounds/snare.mp3");
var k = new Audio("./sounds/crash.mp3");
var l = new Audio("./sounds/kick-bass.mp3");

// Button press events...
for(var i=0; i<btns.length; i++){
  btns[i].addEventListener("click", function (){

     var InstrumentPlayed = this.innerHTML;
     makeSound(InstrumentPlayed);
     buttonAnimation(InstrumentPlayed);

});
}

// KeyBoard Events...
document.addEventListener("keypress", function(event){
  //console.log(a);
  var keypressed = event.key;
  makeSound(keypressed);
  buttonAnimation(keypressed);

});


// Sounds JS...
function makeSound(Key){
  switch (Key) {
    case "w":
      w.play();
      break;
   case "a":
       a.play();
       break;
   case "s":
     s.play();
     break;
   case "d":
     d.play();
     break;
   case "j":
     j.play();
     break;
   case "k":
     k.play();
     break;
   case "l":
     l.play();
     break;

   default: console.log(Key);
  }
}

function buttonAnimation(currentKey){
  var activeKey = document.querySelector("."+currentKey);

  activeKey.classList.add("pressed");

  setTimeout(function(){
    activeKey.classList.remove("pressed");
  }, 100);
}
