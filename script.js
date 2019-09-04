var bird=document.querySelector(".bird").style;
var v=0;
var g=0.6;
var y=0;
var lift=-15;
var interval;
function run(){
v+=g;
v*=0.9;
y+=v;
bird.transform=`translatey(${y}px)`;
if(y>=innerHeight-30){
    y=innerHeight-30;     
    v=0;
}
if(y<20){
    y=20;
    v=0;
}
}
interval=setInterval(run,10);
function up(){
v+=lift;
// bird.transform=`rotate(30deg)`;
}





