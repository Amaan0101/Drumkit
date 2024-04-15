/*
document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    alert("i got clicked");

}
*/
// 
var noofbuttons= document.querySelectorAll(".drum").length;

for(var i=0;i<noofbuttons;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click", function()
     {
        var buttonInnerHtml= this.innerHTML;
      //  console.log(this.style.color="white");
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
     });
    }
     document.addEventListener("keypress",function(event){
      makeSound(event.key);
     
});


//var audio= new Audio('sounds/tom-1.mp3');
//audio.play();
function makeSound(key){
  switch (key) {
    case 'w':
        var audio= new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
   case 'a': 
   var audio= new Audio('sounds/tom-2.mp3');
   audio.play();
   break;

   case 's': 
   var audio= new Audio('sounds/tom-3.mp3');
   audio.play();
   break;

   case 'd': 
   var audio= new Audio('sounds/tom-4.mp3');
   audio.play();
   break;

   case 'j': 
   var audio= new Audio('sounds/snare.mp3');
   audio.play();
   break;

   case 'k': 
   var audio= new Audio('sounds/crash.mp3');
   audio.play();
   break;

   case 'l': 
   var audio= new Audio('sounds/kick-bass.mp3');
   audio.play();
   break;

   default:console.log();
   break;

        
   } 
}

function buttonAnimation(currentKey){
 var activeButton=  document.querySelector("." + currentKey)
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
 },100);
}
