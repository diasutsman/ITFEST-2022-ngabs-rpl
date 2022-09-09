// DECLARATION
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

// Add shadow to header when scroll
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

// Scroll Reveal animation
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

// Add alts to images
function addAltsToImg() {
    document.querySelectorAll('img').forEach(img => {
        if (!img.alt) img.alt = img.src.split('/').pop().split('.').shift()
    })
}

// Testimonials slider
function testimonialsSlider() {
    let slideIndex = 1;
    let slides = document.getElementsByClassName("testimonial");
    const dotsElement = document.querySelector('.dots')
    dotsElement.append(
        dotsElement.firstElementChild,
        ...Array.from({ length: slides.length }, (_, i) => {
            const span = document.createElement('span')
            span.classList.add('dot')
            span.addEventListener('click', () => currentSlide(i + 1))
            return span
        }),
        dotsElement.lastElementChild
    )

    let dots = document.getElementsByClassName("dot");
    showSlides(slideIndex);


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    document.querySelector('.next').onclick = () => plusSlides(1)
    document.querySelector('.prev').onclick = () => plusSlides(-1)

    function showSlides(n) {
        let i;
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-slider", "");
        }
        slides[slideIndex - 1].style.display = "grid";
        dots[slideIndex - 1].className += " active-slider";
    }

    setInterval(() => showSlides(++slideIndex), 5000)
}

function makeElementTiltable(element) {
    const tiltEffectSettings = {
        max: 25,
        perspective: 1000,
        scale: 1.05,
        speed: 500,
        easing: "cubic-bezier(.03,.98,.52,.99)"
    };

    element.addEventListener("mouseenter", elementMouseEnter);
    element.addEventListener("mousemove", elementMouseMove);
    element.addEventListener("mouseleave", elementMouseLeave);

    function elementMouseEnter(event) {
        setTransition();
    }

    function elementMouseMove(event) {
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;
        const centerX = element.offsetLeft + elementWidth / 2;
        const centerY = element.offsetTop + elementHeight / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        const rotateXUncapped = (+1) * (tiltEffectSettings.max * mouseY / (elementHeight / 2));
        const rotateYUncapped = (-1) * (tiltEffectSettings.max * mouseX / (elementWidth / 2));
        const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
        const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);

        element.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                              scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
    }

    function elementMouseLeave(event) {
        element.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        setTransition();
    }

    function setTransition() {
        clearTimeout(element.transitionTimeoutId);
        element.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
        element.transitionTimeoutId = setTimeout(() => {
            element.style.transition = "";
        }, tiltEffectSettings.speed);
    }
}

// Invoke all functions and catch errors if any then do nothing
try {
    addAltsToImg()
    scrollReveal()
    makeElementTiltable(document.querySelector(".hero > img"))
    makeElementTiltable(document.querySelector(".hero h1 > span"))
    testimonialsSlider()
} catch (e) { }