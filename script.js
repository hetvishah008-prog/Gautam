/* =========================================================
   GAUTAM — BOYFRIEND'S DAY SURPRISE
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let currentScreen = 1;
let heartAlreadyClicked = false;
let envelopeOpened = false;
let typingStarted = false;


/* =========================================================
   SCREEN NAVIGATION
========================================================= */

function nextScreen(number) {

    const current = document.querySelector(".screen.active");

    if (current) {
        current.classList.remove("active");
    }

    const next = document.getElementById("screen" + number);

    if (next) {
        next.classList.add("active");
        currentScreen = number;
    }

    if (number === 3 && !typingStarted) {
        startTyping();
    }
}


/* =========================================================
   TYPING MESSAGE
========================================================= */

const typingMessage =
    "Sometimes you don't need a big reason to make someone a little surprise. Sometimes you simply do it because that person has become a beautiful part of your memories. ❤️";

function startTyping() {

    typingStarted = true;

    const textElement =
        document.getElementById("typingText");

    const button =
        document.getElementById("screen3Button");

    if (!textElement) return;

    textElement.textContent = "";

    let index = 0;

    const typingSpeed = 42;

    function typeNext() {

        if (index < typingMessage.length) {

            textElement.textContent +=
                typingMessage.charAt(index);

            index++;

            setTimeout(typeNext, typingSpeed);

        } else {

            if (button) {
                button.classList.add("show");
            }
        }
    }

    typeNext();
}


/* =========================================================
   INTERACTIVE HEART
========================================================= */

function heartClicked() {

    const message =
        document.getElementById("heartMessage");

    const instruction =
        document.getElementById("heartInstruction");

    if (!heartAlreadyClicked) {

        heartAlreadyClicked = true;

        if (instruction) {
            instruction.textContent =
                "You found it... ❤️";
        }

        if (message) {

            message.innerHTML = `
                <p>
                    My heart has always been hiding
                    in the little moments. 💗
                </p>
            `;

        }

        createHeartBurst();

        setTimeout(() => {

            const button =
                document.createElement("button");

            button.textContent =
                "See Our Memories 📸";

            button.onclick = function () {
                nextScreen(6);
            };

            if (message) {
                message.appendChild(button);
            }

        }, 900);
    }
}


/* =========================================================
   HEART BURST
========================================================= */

function createHeartBurst() {

    for (let i = 0; i < 24; i++) {

        const heart =
            document.createElement("span");

        heart.className =
            "burst-heart";

        heart.textContent =
            Math.random() > .5 ? "♡" : "♥";

        heart.style.setProperty(
            "--x",
            ((Math.random() - .5) * 420) + "px"
        );

        heart.style.setProperty(
            "--y",
            ((Math.random() - .5) * 420) + "px"
        );

        heart.style.setProperty(
            "--size",
            (14 + Math.random() * 22) + "px"
        );

        heart.style.animationDelay =
            (Math.random() * .25) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2200);
    }
}


/* =========================================================
   MEMORY NAVIGATION
========================================================= */

function showMemory(number) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const memory =
        document.getElementById("memory" + number);

    if (memory) {
        memory.classList.add("active");
    }

    currentScreen = "memory" + number;
}


/* =========================================================
   ENVELOPE
========================================================= */

function openEnvelope() {

    if (envelopeOpened) return;

    envelopeOpened = true;

    const wrapper =
        document.getElementById("envelopeWrapper");

    const hint =
        document.getElementById("envelopeHint");

    const button =
        document.getElementById("letterButton");

    if (wrapper) {
        wrapper.classList.add("open");
    }

    if (hint) {
        hint.textContent =
            "Something special is waiting inside... 💌";
    }

    setTimeout(() => {

        if (button) {
            button.classList.add("show");
        }

    }, 1200);
}


/* =========================================================
   SHOW LETTER
========================================================= */

function showLetter() {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const letterScreen =
        document.getElementById("letterScreen");

    if (letterScreen) {
        letterScreen.classList.add("active");

        letterScreen.scrollTop = 0;
    }

    currentScreen = "letterScreen";
}


/* =========================================================
   FLOATING BACKGROUND HEARTS
========================================================= */

function createFloatingHeart() {

    const container =
        document.getElementById("hearts");

    if (!container) return;

    const heart =
        document.createElement("span");

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > .45 ? "♡" : "♥";

    const left =
        Math.random() * 100;

    const size =
        12 + Math.random() * 25;

    const duration =
        7 + Math.random() * 7;

    const drift =
        (Math.random() - .5) * 180;

    heart.style.setProperty(
        "left",
        left + "%",
        "important"
    );

    heart.style.fontSize =
        size + "px";

    heart.style.setProperty(
        "--duration",
        duration + "s"
    );

    heart.style.setProperty(
        "--drift",
        drift + "px"
    );

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, (duration + 1) * 1000);
}


/* =========================================================
   START FLOATING HEARTS
========================================================= */

setInterval(() => {

    createFloatingHeart();

}, 650);


/* =========================================================
   FINAL MILLION HEARTS
========================================================= */

function finalCelebration() {

    const button =
        document.querySelector("#screen10 button");

    if (button) {

        button.disabled = true;

        button.textContent =
            "Sending all my hearts... ❤️";
    }

    /* Initial heart burst */

    for (let i = 0; i < 90; i++) {

        setTimeout(() => {

            createCelebrationHeart();

        }, i * 18);
    }

    /* Second wave */

    setTimeout(() => {

        for (let i = 0; i < 70; i++) {

            setTimeout(() => {

                createCelebrationHeart();

            }, i * 15);
        }

    }, 700);


    /* Final message */

    setTimeout(() => {

        showFinalMessage();

    }, 2600);
}


/* =========================================================
   CREATE CELEBRATION HEART
========================================================= */

function createCelebrationHeart() {

    const heart =
        document.createElement("span");

    heart.className =
        "celebration-heart";

    heart.textContent =
        Math.random() > .35 ? "❤️" : "💗";

    heart.style.setProperty(
        "--x",
        ((Math.random() - .5) * window.innerWidth * 1.4) + "px"
    );

    heart.style.setProperty(
        "--y",
        ((Math.random() - .5) * window.innerHeight * 1.3) + "px"
    );

    heart.style.setProperty(
        "--size",
        (14 + Math.random() * 25) + "px"
    );

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 3200);
}


/* =========================================================
   FINAL MESSAGE
========================================================= */

function showFinalMessage() {

    const content =
        document.querySelector("#screen10 .content");

    if (!content) return;

    const existing =
        document.getElementById("finalThankYou");

    if (existing) return;

    const message =
        document.createElement("div");

    message.id =
        "finalThankYou";

    message.innerHTML = `
        <div style="
            margin-top:25px;
            font-size:1.25rem;
            color:#ffb5e4;
            line-height:1.7;
            animation:screenIn .8s ease forwards;
        ">
            From my little corner of the internet
            to your heart... ❤️
            <br><br>
            I LOVE YOU SOO MUCHH 🥹💗
        </div>
    `;

    content.appendChild(message);
}


/* =========================================================
   SMALL HEART EXPLOSION
========================================================= */

function smallHeartExplosion() {

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("span");

        heart.className =
            "burst-heart";

        heart.textContent = "💗";

        heart.style.setProperty(
            "--x",
            ((Math.random() - .5) * 300) + "px"
        );

        heart.style.setProperty(
            "--y",
            ((Math.random() - .5) * 300) + "px"
        );

        heart.style.setProperty(
            "--size",
            (12 + Math.random() * 18) + "px"
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* Start a few hearts immediately */

        for (let i = 0; i < 8; i++) {

            setTimeout(() => {

                createFloatingHeart();

            }, i * 300);
        }

    }
);