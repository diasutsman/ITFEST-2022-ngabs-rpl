const menuBurger = document.querySelector('.menu-toggle')
const nav = document.querySelector('nav ul')
const navWrapper = document.querySelector('.nav-wrapper')
const classList = document.getElementById('class-list')

if (classList) {
    classes.forEach(theClass => {
        classList.innerHTML += classItem(theClass)
    })
    dragScroll()
}

menuBurger?.addEventListener('click', e => {
    nav.classList.toggle('slide')
})

// Make menu closed when one of links is clicked
nav?.querySelectorAll('a').forEach(e => e.addEventListener('click', e => {
    if (nav.classList.contains('slide')) menuBurger.firstElementChild.click()
}))

// Make body cannot be triggered when click is inside nav
navWrapper.firstElementChild.addEventListener('click', e => {
    e.stopPropagation()
})

// close menu when click outside menu
document.body.addEventListener('click', e => {
    if (nav.classList.contains('slide')) menuBurger.firstElementChild.click()
})

window.addEventListener('scroll', e => {
    if (window.scrollY > 0) navWrapper.classList.add('add-shadow')
    else navWrapper.classList.remove('add-shadow')

})

// Scroll with drag

function dragScroll(e) {
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
}

// Auto scroll Class List
function scrollReveal() {
    window.addEventListener('scroll', () => {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            console.log()

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    })
}


function addAltsToImg() {
    document.querySelectorAll('img').forEach(img => {
        if (!img.alt) img.alt = img.src.split('/').pop().split('.').shift()
    })
}
addAltsToImg()
scrollReveal()