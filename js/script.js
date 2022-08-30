const menuBurger = document.querySelector('.menu-toggle')
const nav = document.querySelector('nav ul')

menuBurger.addEventListener('click', e => {
    nav.classList.toggle('slide')
})

// Make menu closed when one of links is clicked
nav.querySelectorAll('a').forEach(e => e.addEventListener('click', e => {
    if (nav.classList.contains('slide')) menuBurger.firstElementChild.click()
}))

// Make body cannot be triggered when click is inside nav
nav.parentElement.addEventListener('click', e => {
    e.stopPropagation()
})

// close menu when 
document.body.addEventListener('click', e => {
    nav.querySelector('a').click()
})

window.addEventListener('scroll', e => {
    if (window.scrollY > 0) nav.parentElement.parentElement.classList.add('add-shadow')
    else nav.parentElement.parentElement.classList.remove('add-shadow')

})