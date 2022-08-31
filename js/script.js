const menuBurger = document.querySelector('.menu-toggle')
const nav = document.querySelector('nav ul')
const classList = document.getElementById('class-list')

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

// close menu when click outside menu
document.body.addEventListener('click', e => {
    if (nav.classList.contains('slide')) menuBurger.firstElementChild.click()
})

window.addEventListener('scroll', e => {
    if (window.scrollY > 0) nav.parentElement.parentElement.classList.add('add-shadow')
    else nav.parentElement.parentElement.classList.remove('add-shadow')

})

classes.forEach(theClass => {
    classList.innerHTML += classItem(theClass)
})

// Scroll with drag

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: classList.scrollLeft,
        top: classList.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    console.log(pos.left, pos.x)

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {


    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Change the cursor and prevent user from selecting the text
    //classList.style.cursor = 'grabbing';
    classList.style.userSelect = 'none';

    // Scroll the element
    classList.scrollTop = pos.top - dy;
    classList.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    //classList.style.cursor = 'grab';
    classList.style.removeProperty('user-select');
};

classList.addEventListener('mousedown', mouseDownHandler)