/* ================= MABICIMA IMAGE SLIDESHOW ================= */

const mabicimaImages = [
    "live.png",
    "live1.png"
];

let mabicimaIndex = 0;

const mabicimaImage = document.getElementById(
    "mabicima-live-image"
);

if (mabicimaImage) {

    setInterval(function () {

        // Fade out
        mabicimaImage.style.opacity = "0";

        setTimeout(function () {

            // Move to the next image
            mabicimaIndex++;

            if (mabicimaIndex >= mabicimaImages.length) {
                mabicimaIndex = 0;
            }

            // Change image
            mabicimaImage.src =
                mabicimaImages[mabicimaIndex];

            // Fade in
            mabicimaImage.style.opacity = "1";

        }, 800);

    }, 4000);

}


/* ================= HEADER SHADOW ================= */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ================= NAVIGATION ================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const menu = document.querySelector(".nav-links");

        if (menu) {
            menu.classList.remove("active");
        }

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you for your request. Please contact Mpho Web Solutions directly on WhatsApp or email."
        );

    });

}
