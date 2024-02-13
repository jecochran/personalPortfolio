const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const mainPageAnchors = document.querySelectorAll('.toCircle');

mainPageAnchors.forEach(function (mainPageAnchor) {
    mainPageAnchor.addEventListener("mouseover", function () {
        mainPageAnchor.classList.add('rounded-pill');
        mainPageAnchor.style.backgroundColor = '#3C4558';

    });

    mainPageAnchor.addEventListener("mouseout", function () {
        mainPageAnchor.classList.remove('rounded-pill');
        mainPageAnchor.style.backgroundColor = '#7994CF';
    });
})

document.getElementById("anchorToSkills").addEventListener("click", function () {
    document.getElementById("destSkills").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("anchorToProjects").addEventListener("click", function () {
    document.getElementById("destProjects").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("LinkedIn").addEventListener('click', function () {
    window.location.href = 'https://www.linkedin.com/in/jake-cochran/';
})

const projectImages = document.querySelectorAll('.projImage');

// Check for screen size using a media query
const isDesktopOrLaptop = window.matchMedia('(min-width: 768px)');

projectImages.forEach(function (image) {
    const imageElement = image.querySelector('img');

    // Add event listeners only if it's a desktop or laptop
    if (isDesktopOrLaptop.matches) {
        image.addEventListener("mouseover", function () {
            imageElement.classList.add("blur");
        });

        image.addEventListener("mouseout", function () {
            imageElement.classList.remove("blur");
        });
    }
});



