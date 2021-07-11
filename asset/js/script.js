const navbar = document.querySelector('.navbar');
const headingHero = document.querySelector('.hero h1');
document.addEventListener('scroll', ()=> {
    if(this.pageYOffset > headingHero.offsetTop - navbar.clientHeight){
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
});
