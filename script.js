//import Sound from './clock_sound.wav'


  
  var i=0;
  if (i<=0){
     clockminutepointcreating();
     i +=2
    
  }

function find_day(day){
  switch (day){
    case 1:return "Monday"
    case 2:return "Tuesday"
    case 3:return "Wednesday"
    case 4:return "Thrusday"
    case 5:return "Friday"
    case 6:return "Sunday"
    case 0:return "Sunday"
  }
}

function initial_clock(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var day=today.getDay();
   
    var h=time.toString().replace(":",' ').split(" ")[0]
    var m=time.toString().replace(":",' ').replace(":"," ").split(" ")[1]
    var s=time.toString().replace(":",' ').replace(":"," ").split(" ")[2]

    //console.log(h,m,s)
    //console.log("day :"+day)
    //console.log(find_day(day))
    

    var initial_m =m*6;
    var initial_h =(h*30)+(m/12)*6;
    var initial_s=s*6;
    
    //console.log(initial_h,initial_m,initial_s)
    document.getElementById("HOUR").style.transform='rotate('+initial_h+'deg)'
    
    document.getElementById("MIN").style.transform='rotate('+initial_m+'deg)'
    document.getElementById("SEC").style.transform='rotate('+initial_s+'deg)'
    document.getElementById("DAY").innerHTML="<h2>"+ find_day(day)+"</h2>"
}

setInterval (initial_clock,1000)
//var source=document.getElementsById("DAY")
//source.addEventListener("click",playSound)
function playSound(){                     
  
  var audio = new Audio("clock_sound.wav");
  
audio.loop =true;
audio.playbackRate = 2;
audio.play();


}

function  clockminutepointcreating(){
 //let span= document.createElement('span')
 //span.classList.add("point")
  
  var l=30
    var p=0;
    while(l>=p){
      
   var angle=p*6;

   var style=`style="transform:rotate(${angle}deg)"`

   let Point=`<span class="point" ${style}>
   <samp class="block_gray"></samp>
  <samp class="block_gray"></samp>
</span>`
 var DIV= document.createElement("span")
 DIV.innerHTML=Point
 //console.log(DIV)
   //Point.style.transform='rotation('+angle+'deg)'
   //document.getElementById("Location").innerHTML=Point
   document.getElementById("Location").appendChild(DIV)
    p++
    }
  
}