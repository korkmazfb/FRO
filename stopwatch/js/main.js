const startbutton = document.getElementById("js--start");
const stopbutton = document.getElementById("js--stop");
const resetbutton = document.getElementById("js--reset");
console.log(stopbutton);
let seconds = 0;
let minutes = 0;
let running = false

const secondstimer = document.getElementById("js--secondstimer");
const minutestimer = document.getElementById("js--minutestimer");

let timer;



startbutton.onclick = function(){
    if(running === true){
        return;
    }
    console.log("ikk ben bijna aan het tellen")
    running = true;
      timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds === 60){
            minutes = minutes + 1;
            minutestimer.innerText = minutes;
            seconds = 0;
        }
        secondstimer.innerText = seconds;
    }, 1000 );
    
}

stopbutton.onclick = function(){
    clearInterval(timer);
    running = false;
}

resetbutton.onclick = function(){
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    secondstimer.innerText = seconds;
    minutestimer.innerText = minutes;
}

3
const rangevalue = document.getElementById("js--rangevalue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body")
slider.value = 2;
rangevalue.innerText = slider.value + "x";

slider.oninput = function(){
    rangevalue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}

const paragraph = document.getElementById("js--text");
let data = fetch("../data.json").then(
    function(data){
        return data.json();

    }).then(
        function(echtedata){
            paragraph.innerHTML = echtedata.text;
            img.src = echtedata.img;
        }
        
    
);

const text = document.getElementById("js--text");
text.innerText = data.text;

const img = document.querySelector("img"); 
img.src = "img/pexels.webp";
