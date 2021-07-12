const navbar = document.querySelector('.navbar');
const headingHero = document.querySelector('.hero h1');
const navToggler = document.querySelector(".navbar-toggler");

document.addEventListener('scroll', ()=> {
    if(this.pageYOffset > headingHero.offsetTop - navbar.clientHeight){
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
});

navToggler.addEventListener('click', ()=> {
    navToggler.classList.toggle("active")
})