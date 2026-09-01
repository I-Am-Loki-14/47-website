
function closenav() {
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');

    navbarCollapse.classList.remove('show');
    console.log("Closed");
}


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

const DTcard = document.getElementById('dt-card');
const Th47 = document.getElementById('thai47')


const CHcard = document.getElementById('ch-card')
const Ch47 = document.getElementById('chinese47')






  // Thai 47 Js
        const MenuSlidersOne = document.querySelectorAll('.menu-container-1 .menu-container-card')
        let ThaiIndex = 0

        function nextthai() {
            ThaiIndex = (ThaiIndex + 1) % MenuSlidersOne.length
            MenuSlidersOne.forEach(slide => slide.classList.remove('active-first'));
            MenuSlidersOne[ThaiIndex].classList.add('active-first')
        }
        function prevthai() {
            ThaiIndex = (ThaiIndex - 1 + MenuSlidersOne.length) % MenuSlidersOne.length
            MenuSlidersOne.forEach(slide => slide.classList.remove('active-first'))
            MenuSlidersOne[ThaiIndex].classList.add('active-first')
        }
        // Chinese 47 Js
        const MenuSlidersTwo = document.querySelectorAll('.menu-container-2 .menu-container-card')
        let ChineseIndex = 0

        function nextchinese() {
            ChineseIndex = (ChineseIndex + 1) % MenuSlidersTwo.length
            MenuSlidersTwo.forEach(slide => slide.classList.remove('active-first'));
            MenuSlidersTwo[ChineseIndex].classList.add('active-first')
        }
        function prevchinese() {
            ChineseIndex = (ChineseIndex - 1 + MenuSlidersTwo.length) % MenuSlidersTwo.length
            MenuSlidersTwo.forEach(slide => slide.classList.remove('active-first'))
            MenuSlidersTwo[ChineseIndex].classList.add('active-first')
        }
        // setInterval(nextt, 4000)

        function T47() {
           
        DTcard.style.display = "block"
        CHcard.style.display = "none"
        Th47.style.backgroundColor = "#ffa42cdf"
        Th47.style.color = "#000000e7"
        Ch47.style.backgroundColor = "transparent";
       
    }
    function CH47() {
      
        Ch47.style.backgroundColor = "#ffa42cdf"
        CHcard.style.display = "block";
        DTcard.style.display = "none";
         Th47.style.backgroundColor = "transparent";
 }