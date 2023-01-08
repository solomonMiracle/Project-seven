
const navbar = document.querySelector('nav');
window.addEventListener('scroll', ()=>{
    navbar.classList.toggle('nav-scroll', window.scrollY > 0);
})


const headerLinks = document.querySelector('header-links');





