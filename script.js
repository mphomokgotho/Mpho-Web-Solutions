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
   KOOKO NUTS IMAGE SLIDESHOW
========================= */

const kookoImages = [
    "k.png",
    "k1.png",
    "k2.png",
    "k3.png"
];

let kookoIndex = 0;

const kookoImage =
    document.getElementById("kooko-live-image");


if (kookoImage) {

    setInterval(function () {

        kookoImage.style.opacity = "0";

        setTimeout(function () {

            kookoIndex++;

            if (kookoIndex >= kookoImages.length) {
                kookoIndex = 0;
            }

            kookoImage.src =
                kookoImages[kookoIndex];

            kookoImage.style.opacity = "1";

        }, 800);

    }, 4000);

}


/* =========================
   HEADER SHADOW
========================= */

const header =
    document.getElementById("header");


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
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".reveal-section, .reveal-card"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;


            alert(
                "Thank you, " +
                name +
                ". Your enquiry has been received. Please contact Mpho Web Solutions directly on WhatsApp or email."
            );


            contactForm.reset();

        }
    );

}


/* =========================
   FOOTER YEAR
========================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}
