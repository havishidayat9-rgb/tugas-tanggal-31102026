 /* =========================
   AOS ANIMATION
========================= */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


/* =========================
   ANIMASI PESAT
========================= */

const animationContainer =
    document.querySelector(".animasi-container");


/* PLAY */

function playAnimation() {

    animationContainer.classList.remove("berhenti");

}


/* PAUSE */

function pauseAnimation() {

    animationContainer.classList.add("berhenti");

}


/* RESET */

function resetAnimation() {

    animationContainer.classList.add("berhenti");

    const elements =
        animationContainer.querySelectorAll("*");

    elements.forEach(function(element) {

        element.style.animation = "none";

        element.offsetHeight;

        element.style.animation = "";

    });

    animationContainer.classList.remove("berhenti");

}