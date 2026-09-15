const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const giftButton = document.getElementById("giftButton");
const playlist = document.getElementById("playlist");


// OPEN WEBSITE

openButton.addEventListener("click", () => {

    opening.classList.add("hidden");

    mainContent.classList.add("visible");

    setTimeout(() => {
        opening.style.display = "none";
    }, 800);

});


// SCROLL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// FINAL GIFT

giftButton.addEventListener("click", () => {

    playlist.classList.add("visible");

    giftButton.style.display = "none";

    playlist.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});