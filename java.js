
for(var i=0;i<document.querySelectorAll("button").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    /*  alert("sachin");*/
     const str=this.innerHTML;

     if(str=="w")
     {
       var audio=new Audio("sounds/crash.mp3");
       audio.play();

     }
     if(str=="a")
     {
       var audio=new Audio("sounds/kick-bass.mp3");
       audio.play();
     }
     if(str=="s")
     {
       var audio=new Audio("sounds/snare.mp3");
       audio.play();
     }
     if(str=="d")
     {
       var audio=new Audio("sounds/tom-1.mp3");
       audio.play();
     }
     if(str=="j")
     {
       var audio=new Audio("sounds/tom-2.mp3");
       audio.play();
     }
     if(str=="k")
     {
       var audio=new Audio("sounds/tom-3.mp3");
       audio.play();
     }
     if(str=="l")
     {
       var audio=new Audio("sounds/tom-4.mp3");
       audio.play();
     }
   });

}
