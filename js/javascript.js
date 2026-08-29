const sliders = document.querySelectorAll('.slide-container .slide-card')
let index = 0 ;

function next() {
    index = (index + 1) % sliders.length
    sliders.forEach(slide => slide.classList.remove('active-fade'));
    sliders[index].classList.add('active-fade')
}
function prev() {
    index = (index - 1 + sliders.length) % sliders.length
    sliders.forEach(slide => slide.classList.remove('active-fade'))
    sliders[index].classList.add('active-fade')
}
setInterval(next,5000);

const Dark = document.getElementById("dark")

function dark() {
    if (!Dark.classList.toggle('Dark')) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        Dark.innerHTML = '<img src="./img/sun.png" alt="">';
        
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark')
        Dark.innerHTML = '<img src="./img/moon.png" alt="">';
        
      
    }
}
// Tiny Js 
const DTcard = document.getElementById('dt-card');
const Th47 = document.getElementById('thai47')
console.log(DTcard);

const CHcard = document.getElementById('ch-card')
const Ch47 = document.getElementById('chinese47')
console.log(CHcard);


function T47() {
        DTcard.style.display = "block"
       
        CHcard.style.display = "none"
        Th47.style.backgroundColor = "#ffa42cdf"
        Th47.style.color = "#000000e7"
         Ch47.style.backgroundColor = "transparent"
    }
    function CH47() {
        Ch47.style.backgroundColor = "#ffa42cdf"
        CHcard.style.display = "block";
        DTcard.style.display = "none";
         Th47.style.backgroundColor = "transparent"

 }