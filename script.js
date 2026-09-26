/* =========================
   MABICIMA IMAGE SLIDESHOW
========================= */

const mabicimaImages = [
    "live.png",
    "live1.png"
];

let mabicimaIndex = 0;

const mabicimaImage =
    document.getElementById("mabicima-live-image");

if (mabicimaImage) {

    setInterval(function () {

        mabicimaImage.style.opacity = "0";

        setTimeout(function () {

            mabicimaIndex++;

            if (mabicimaIndex >= mabicimaImages.length) {
                mabicimaIndex = 0;
            }

            mabicimaImage.src =
                mabicimaImages[mabicimaIndex];

            mabicimaImage.style.opacity = "1";

        }, 800);

    }, 4000);
}


/* =========================
   HEADER SHADOW
========================= */

const header = document.getElementById("header");

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


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const business =
            document.getElementById("business").value;

        const message =
            document.getElementById("message").value;

        const whatsappNumber = "27649869333";

        const whatsappMessage =
            "Hello Mpho Web Solutions.%0A%0A" +
            "Name: " + encodeURIComponent(name) +
            "%0AEmail: " + encodeURIComponent(email) +
            "%0ABusiness / Project: " + encodeURIComponent(business) +
            "%0A%0AMessage:%0A" +
            encodeURIComponent(message);

        window.open(
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            whatsappMessage,
            "_blank"
        );

    });

}


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
