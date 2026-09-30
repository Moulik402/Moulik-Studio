/* =========================================
   MOULIK STUDIO — INTERACTIONS
========================================= */


/* CURSOR GLOW */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;

});


/* MOBILE MENU */

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


/* NAVBAR SCROLL */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(9,9,9,.88)";
        navbar.style.borderBottomColor = "rgba(255,255,255,.18)";

    } else {

        navbar.style.background = "rgba(9,9,9,.72)";
        navbar.style.borderBottomColor = "rgba(255,255,255,.13)";

    }

});


/* PROJECT TILT */

const projectVisuals = document.querySelectorAll(".project-visual");

projectVisuals.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        if (window.innerWidth < 800) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1200px) rotateX(0) rotateY(0) scale(1)";

    });

});


/* SERVICE HOVER */

document.querySelectorAll(".service").forEach(service => {

    service.addEventListener("mouseenter", () => {

        service.querySelector(".service-symbol").style.transform =
            "rotate(45deg)";

    });

    service.addEventListener("mouseleave", () => {

        service.querySelector(".service-symbol").style.transform =
            "rotate(0deg)";

    });

});


/* MAGNETIC BUTTONS */

const magneticButtons = document.querySelectorAll(
    ".nav-cta, .contact-button, .circle-link"
);

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        if (window.innerWidth < 800) return;

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* HERO PARALLAX */

const orbit = document.querySelector(".hero-orbit");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if (scroll < window.innerHeight * 1.2) {

        orbit.style.transform =
            `translateY(${scroll * 0.12}px) rotate(${scroll * 0.02}deg)`;

    }

});


/* SMOOTH ANCHOR OFFSET */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        const offset = 80;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    });

});


/* PAGE LOAD */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});