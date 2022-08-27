const menuBurger = document.querySelector('.menu-toggle')
const nav = document.querySelector('nav ul')

menuBurger.addEventListener('click', () => {
    nav.classList.toggle('slide')
})