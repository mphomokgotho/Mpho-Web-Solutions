
/* =========================
   MPHO WEB SOLUTIONS
   WEBSITE JAVASCRIPT
========================= */


/* =========================
   NAVIGATION
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            contactForm.querySelector('input[type="text"]').value;

        const email =
            contactForm.querySelector('input[type="email"]').value;

        const business =
            contactForm.querySelectorAll('input[type="text"]')[1].value;

        const message =
            contactForm.querySelector("textarea").value;


        const whatsappMessage =
            "Hello Mpho Web Solutions.%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Email: " + encodeURIComponent(email) + "%0A" +
            "Business: " + encodeURIComponent(business) + "%0A" +
            "Website Request: " + encodeURIComponent(message);


        const whatsappURL =
            "https://wa.me/27649869333?text=" + whatsappMessage;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-card, .about-content, .contact-info, .contact-form"
);


const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function(element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   CURRENT YEAR
========================= */

const yearElement = document.querySelector(".copyright");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        "© " + currentYear +
        " Mpho Web Solutions. All Rights Reserved.";

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

