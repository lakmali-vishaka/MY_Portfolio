/*===============================Toggle Style Switcher=============================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*===============================Theme colors=============================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true"); 
        }
    })
}

/* ========================theme light and dark mode======================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})

// ====================== Multiple Slideshows ========================
let slideIndex = []; // Array to store the current index of each slideshow
let slideShowContainers = document.getElementsByClassName("slideshow-container"); // Get all slideshow containers

// Initialize each slideshow container with its own slides and start the show
for (let i = 0; i < slideShowContainers.length; i++) {
    slideIndex[i] = 0; // Initialize the slide index for each container
    showSlides(i); // Start the slideshow for each container
}

function showSlides(containerIndex) {
    let slides = slideShowContainers[containerIndex].getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides in the current container
    }
    slideIndex[containerIndex]++;
    if (slideIndex[containerIndex] > slides.length) {
        slideIndex[containerIndex] = 1;
    }
    slides[slideIndex[containerIndex] - 1].style.display = "block"; // Show the current slide
    setTimeout(() => showSlides(containerIndex), 2000); // Continue showing slides every 2 seconds
}




