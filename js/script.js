const menuBurger = document.querySelector('.menu-toggle')
const nav = document.querySelector('nav ul')

menuBurger.addEventListener('click', e => {
    nav.classList.toggle('slide')
    e.stopPropagation()
})

nav.querySelectorAll('a').forEach(e => e.addEventListener('click', e => {
    menuBurger.firstElementChild.click()
    e.stopPropagation()
}))

document.body.addEventListener('click', e => {
    menuBurger.firstElementChild.click()
})