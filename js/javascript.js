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
