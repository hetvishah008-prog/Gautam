/* =========================================================
   GAUTAM — BOYFRIEND'S DAY
   COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let typingStarted = false;

let heartClickedOnce = false;

let envelopeOpened = false;


/* =========================================================
   TYPING MESSAGE
   ========================================================= */

const typingMessage =
    "No matter how many little moments pass us by... some people slowly become a beautiful part of your story. And Gautam, you are one of those people for me. ❤️";


/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

function nextScreen(number) {

    const current =
        document.querySelector(
            ".screen.active"
        );

    const next =
        document.getElementById(
            "screen" + number
        );


    if (!next) {
        return;
    }


    if (current) {

        current.classList.remove(
            "active"
        );

        setTimeout(() => {

            current.style.display =
                "none";

        }, 700);
    }


    next.style.display = "flex";


    setTimeout(() => {

        next.classList.add(
            "active"
        );

    }, 50);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /* START TYPING */

    if (number === 3) {

        setTimeout(() => {

            startTyping();

        }, 700);
    }


    /* SMALL CELEBRATIONS */

    if (
        number === 4 ||
        number === 6
    ) {

        setTimeout(() => {

            smallHeartExplosion();

        }, 500);
    }
}


/* =========================================================
   MEMORY NAVIGATION
   ========================================================= */

function showMemory(number) {

    const allScreens =
        document.querySelectorAll(
            ".screen"
        );


    allScreens.forEach(
        screen => {

            screen.classList.remove(
                "active"
            );

            screen.style.display =
                "none";
        }
    );


    const memory =
        document.getElementById(
            "memory" + number
        );


    if (!memory) {
        return;
    }


    memory.style.display =
        "flex";


    setTimeout(() => {

        memory.classList.add(
            "active"
        );

    }, 50);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    setTimeout(() => {

        smallHeartExplosion();

    }, 500);
}


/* =========================================================
   TYPING EFFECT
   ========================================================= */

function startTyping() {

    if (typingStarted) {
        return;
    }


    typingStarted = true;


    const textElement =
        document.getElementById(
            "typingText"
        );


    const button =
        document.getElementById(
            "screen3Button"
        );


    if (!textElement) {
        return;
    }


    let index = 0;


    textElement.innerHTML =
        "";


    if (button) {

        button.classList.remove(
            "show"
        );
    }


    function typeCharacter() {

        if (
            index <
            typingMessage.length
        ) {

            textElement.innerHTML +=
                typingMessage.charAt(
                    index
                );


            index++;


            setTimeout(
                typeCharacter,
                42
            );

        } else {

            if (button) {

                button.classList.add(
                    "show"
                );
            }
        }
    }


    typeCharacter();
}


/* =========================================================
   INTERACTIVE HEART
   ========================================================= */

function heartClicked() {

    const heart =
        document.querySelector(
            ".heart-shape"
        );


    const instruction =
        document.getElementById(
            "heartInstruction"
        );


    const message =
        document.getElementById(
            "heartMessage"
        );


    if (!heart) {
        return;
    }


    /* Make heart bigger */

    heart.style.transform =
        "scale(1.5)";


    heart.style.filter =
        "drop-shadow(0 0 70px rgba(255,30,90,1))";


    /* Change instruction */

    if (instruction) {

        instruction.innerHTML =
            "You found my heart... ❤️";
    }


    /* Message */

    if (message) {

        message.innerHTML =
            "I LOVE YOU, GAUTAM ❤️";
    }


    /* Heart burst */

    createHeartBurst();


    /* Add next button only once */

    if (!heartClickedOnce) {

        heartClickedOnce = true;


        setTimeout(() => {

            const nextButton =
                document.createElement(
                    "button"
                );


            nextButton.innerHTML =
                "Let's Look At Our Memories 📸";


            nextButton.onclick =
                function () {

                    nextScreen(6);

                };


            nextButton.style.marginTop =
                "25px";


            if (message) {

                message.appendChild(
                    nextButton
                );
            }

        }, 1200);
    }
}


/* =========================================================
   FLOATING BACKGROUND HEARTS
   ========================================================= */

function createFloatingHeart() {

    const container =
        document.getElementById(
            "hearts"
        );


    if (!container) {
        return;
    }


    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        "floating-heart";


    heart.textContent =
        Math.random() > 0.5
            ? "♡"
            : "♥";


    /*
       RANDOM HORIZONTAL POSITION

       IMPORTANT:
       We directly set LEFT instead
       of relying on layout.
    */

    heart.style.setProperty(
        "left",
        (
            Math.random() * 100
        ) + "%",
        "important"
    );


    /* RANDOM SIZE */

    heart.style.setProperty(
        "font-size",
        (
            12 +
            Math.random() * 18
        ) + "px",
        "important"
    );


    /* RANDOM SPEED */

    heart.style.setProperty(
        "--heart-duration",
        (
            6 +
            Math.random() * 6
        ) + "s"
    );


    /* RANDOM SIDE MOVEMENT */

    heart.style.setProperty(
        "--heart-drift",
        (
            -80 +
            Math.random() * 160
        ) + "px"
    );


    /*
       FORCE INDEPENDENT POSITIONING
    */

    heart.style.setProperty(
        "position",
        "fixed",
        "important"
    );


    heart.style.setProperty(
        "bottom",
        "-50px",
        "important"
    );


    heart.style.setProperty(
        "top",
        "auto",
        "important"
    );


    container.appendChild(
        heart
    );


    setTimeout(() => {

        if (heart.parentNode) {

            heart.remove();

        }

    }, 14000);
}


/* =========================================================
   START BACKGROUND HEARTS
   ========================================================= */

function startFloatingHearts() {

    /*
       Create some hearts immediately
       so the background doesn't look empty.
    */

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        setTimeout(
            createFloatingHeart,
            i * 250
        );
    }


    /*
       Continue creating hearts.
    */

    setInterval(
        createFloatingHeart,
        800
    );
}


/* =========================================================
   BIG HEART BURST
   ========================================================= */

function createHeartBurst() {

    const symbols = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "✨"
    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.classList.add(
            "celebration-heart"
        );


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            "50vw";


        heart.style.top =
            "50vh";


        const x =
            Math.random() *
            600 -
            300;


        const y =
            Math.random() *
            600 -
            300;


        heart.style.setProperty(
            "--x",
            x + "px"
        );


        heart.style.setProperty(
            "--y",
            y + "px"
        );


        heart.style.fontSize =
            (
                15 +
                Math.random() *
                25
            ) + "px";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            if (heart.parentNode) {

                heart.remove();

            }

        }, 3000);
    }
}


/* =========================================================
   SMALL HEART EXPLOSION
   ========================================================= */

function smallHeartExplosion() {

    const symbols = [
        "❤️",
        "💕",
        "✨"
    ];


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.classList.add(
            "celebration-heart"
        );


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            (
                Math.random() *
                100
            ) + "vw";


        heart.style.top =
            (
                Math.random() *
                100
            ) + "vh";


        heart.style.setProperty(
            "--x",
            (
                Math.random() *
                200 -
                100
            ) + "px"
        );


        heart.style.setProperty(
            "--y",
            (
                Math.random() *
                -250 -
                50
            ) + "px"
        );


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            if (heart.parentNode) {

                heart.remove();

            }

        }, 3000);
    }
}


/* =========================================================
   ENVELOPE OPENING
   ========================================================= */

function openEnvelope() {

    const wrapper =
        document.getElementById(
            "envelopeWrapper"
        );


    const hint =
        document.getElementById(
            "envelopeHint"
        );


    const button =
        document.getElementById(
            "letterButton"
        );


    if (!wrapper) {
        return;
    }


    if (envelopeOpened) {
        return;
    }


    envelopeOpened = true;


    wrapper.classList.add(
        "opened"
    );


    if (hint) {

        hint.innerHTML =
            "The letter is ready for you 💌";
    }


    setTimeout(() => {

        if (button) {

            button.classList.add(
                "show"
            );
        }

    }, 1000);


    smallHeartExplosion();
}


/* =========================================================
   SHOW LETTER
   ========================================================= */

function showLetter() {

    const allScreens =
        document.querySelectorAll(
            ".screen"
        );


    allScreens.forEach(
        screen => {

            screen.classList.remove(
                "active"
            );

            screen.style.display =
                "none";
        }
    );


    const letterScreen =
        document.getElementById(
            "letterScreen"
        );


    if (!letterScreen) {
        return;
    }


    letterScreen.style.display =
        "flex";


    setTimeout(() => {

        letterScreen.classList.add(
            "active"
        );

    }, 50);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    setTimeout(() => {

        smallHeartExplosion();

    }, 600);
}


/* =========================================================
   FINAL MILLION HEARTS
   ========================================================= */

function finalCelebration() {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "♡",
        "✨"
    ];


    /*
       Create a large burst
       directly on BODY.

       This is intentionally NOT
       inside #hearts.
    */

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "celebration-heart";


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        /* Start from center */

        heart.style.left =
            "50%";


        heart.style.top =
            "50%";


        /* Random direction */

        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            350;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        heart.style.setProperty(
            "--x",
            x + "px"
        );


        heart.style.setProperty(
            "--y",
            y + "px"
        );


        /* Random size */

        heart.style.fontSize =
            (
                16 +
                Math.random() *
                24
            ) + "px";


        /* Random delay */

        heart.style.animationDelay =
            (
                Math.random() *
                0.5
            ) + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            if (heart.parentNode) {

                heart.remove();

            }

        }, 3500);
    }
}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Make only screen 1 visible
           initially.
        */

        const screens =
            document.querySelectorAll(
                ".screen"
            );


        screens.forEach(
            screen => {

                if (
                    screen.id !==
                    "screen1"
                ) {

                    screen.style.display =
                        "none";
                }
            }
        );


        const firstScreen =
            document.getElementById(
                "screen1"
            );


        if (firstScreen) {

            firstScreen.style.display =
                "flex";

            firstScreen.classList.add(
                "active"
            );
        }


        /*
           Start floating background hearts.
        */

        startFloatingHearts();

    }
);