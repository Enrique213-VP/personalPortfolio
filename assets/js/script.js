// Dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previosly selected topic (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Menu show and hidden
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// Menu show
/*  Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

// Menu hide
/*  Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 

// Remove menu profile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//Typewriter Effect
new Typewriter('#typewriter', {
  strings: ['Sergio Vargas', 'Mobile developer', 'System engineer'],
  autoStart: true,
  loop: true,
  cursor: "|"
});

//Portfolio Swiper

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });


//Scroll up
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll');
    }
    else {
        scrollup.classList.remove('show-scroll')
    }
    console.log("Scroll up being called and working!")
}
window.addEventListener('scroll', scrollUp)

//Scroll section active highlight

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll', scrollActive)


