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
setInterval(next,3500);

