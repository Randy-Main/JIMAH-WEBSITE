/* =========================================================
   JIMAH CONSULTANCY SERVICES
   MAIN JAVASCRIPT
   ========================================================= */
/* =========================
   PAGE LOADER
   ========================= */

window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");

    const loader = document.querySelector(".page-loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";
        }, 300);
    }
});

/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        nav.classList.toggle("active");
        document.body.classList.toggle("nav-open");
    });

}


/* =========================
   CLOSE MOBILE NAV
   WHEN LINK IS CLICKED
   ========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (menuToggle) {
            menuToggle.classList.remove("active");
        }

        if (nav) {
            nav.classList.remove("active");
        }

        document.body.classList.remove("nav-open");

    });

});


/* =========================
   HEADER SCROLL EFFECT
   ========================= */

const header = document.querySelector("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================
   SMOOTH SCROLLING
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight = header
            ? header.offsetHeight
            : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const revealElements = document.querySelectorAll(
    ".reveal, .section-heading, .service-card, .value-card, .approach-step, .client-card, .why-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


/* =========================
   ACTIVE NAVIGATION
   ========================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (linkTarget === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================
   BUTTON INTERACTION
   ========================= */

const buttons = document.querySelectorAll(
    ".btn, .header-cta"
);

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.add("clicked");

        setTimeout(() => {
            button.classList.remove("clicked");
        }, 250);

    });

});


/* =========================
   CONTACT BUTTON FEEDBACK
   ========================= */

const contactButtons = document.querySelectorAll(
    'a[href="#contact"]'
);

contactButtons.forEach(button => {

    button.addEventListener("click", () => {

        setTimeout(() => {

            const contactSection =
                document.querySelector("#contact");

            if (contactSection) {
                contactSection.classList.add("highlight-section");

                setTimeout(() => {
                    contactSection.classList.remove(
                        "highlight-section"
                    );
                }, 1200);
            }

        }, 500);

    });

});


/* =========================
   DISABLE IMAGE DRAGGING
   ========================= */

document.querySelectorAll("img").forEach(image => {

    image.setAttribute("draggable", "false");

});


/* =========================
   CONSOLE MESSAGE
   ========================= */

console.log(
    "JIMAH Consultancy Services website loaded successfully."
);
/* =========================================================
   JIMAH CLIENT CONVERSATION SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       ELEMENTS
       ----------------------------------------------------- */

    const conversationModal =
        document.getElementById("conversationModal");

    const closeConversation =
        document.getElementById("closeConversation");

    const conversationForm =
        document.getElementById("conversationForm");

    const sendWhatsApp =
        document.getElementById("sendWhatsApp");

    const sendEmail =
        document.getElementById("sendEmail");


    /* -----------------------------------------------------
       FIND ALL CONVERSATION / CTA BUTTONS
       ----------------------------------------------------- */

    const conversationButtons =
        document.querySelectorAll(
            'a[href="#conversation"], .conversation-trigger'
        );


    /* -----------------------------------------------------
       OPEN MODAL
       ----------------------------------------------------- */

    function openConversation() {

        if (!conversationModal) return;

        conversationModal.classList.add("active");

        document.body.classList.add("conversation-open");

        setTimeout(function () {

            const nameInput =
                document.getElementById("clientName");

            if (nameInput) {
                nameInput.focus();
            }

        }, 350);
    }


    /* -----------------------------------------------------
       CLOSE MODAL
       ----------------------------------------------------- */

    function closeConversationModal() {

        if (!conversationModal) return;

        conversationModal.classList.remove("active");

        document.body.classList.remove("conversation-open");
    }


    /* -----------------------------------------------------
       OPEN FROM EXISTING CTA BUTTONS
       ----------------------------------------------------- */

    conversationButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            openConversation();

        });

    });


    /* -----------------------------------------------------
       CLOSE BUTTON
       ----------------------------------------------------- */

    if (closeConversation) {

        closeConversation.addEventListener(
            "click",
            closeConversationModal
        );

    }


    /* -----------------------------------------------------
       CLOSE WHEN CLICKING OUTSIDE MODAL
       ----------------------------------------------------- */

    if (conversationModal) {

        conversationModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === conversationModal
                ) {

                    closeConversationModal();

                }

            }
        );

    }


    /* -----------------------------------------------------
       CLOSE WITH ESCAPE KEY
       ----------------------------------------------------- */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                conversationModal &&
                conversationModal.classList.contains("active")
            ) {

                closeConversationModal();

            }

        }
    );


    /* -----------------------------------------------------
       GET FORM INFORMATION
       ----------------------------------------------------- */

    function getConversationData() {

        const name =
            document.getElementById("clientName").value.trim();

        const phone =
            document.getElementById("clientPhone").value.trim();

        const service =
            document.getElementById("clientService").value;

        const message =
            document.getElementById("clientMessage").value.trim();


        return {
            name,
            phone,
            service,
            message
        };

    }


    /* -----------------------------------------------------
       VALIDATE FORM
       ----------------------------------------------------- */

    function validateConversation(data) {

        if (!data.name) {

            alert("Please enter your name.");

            document.getElementById("clientName").focus();

            return false;

        }


        if (!data.phone) {

            alert("Please enter your phone number.");

            document.getElementById("clientPhone").focus();

            return false;

        }


        if (!data.service) {

            alert("Please select a service.");

            document.getElementById("clientService").focus();

            return false;

        }


        if (!data.message) {

            alert("Please tell us a little about what you need.");

            document.getElementById("clientMessage").focus();

            return false;

        }


        return true;

    }


    /* -----------------------------------------------------
       CREATE MESSAGE
       ----------------------------------------------------- */

    function createClientMessage(data) {

        return (
            "Hello JIMAH Consultancy Services,\n\n" +

            "I would like to make an enquiry through your website.\n\n" +

            "Name: " +
            data.name +
            "\n" +

            "Phone: " +
            data.phone +
            "\n" +

            "Service: " +
            data.service +
            "\n\n" +

            "Message:\n" +
            data.message +

            "\n\nThank you."
        );

    }

/* -----------------------------------------------------
   SEND TO WHATSAPP
   ----------------------------------------------------- */

if (sendWhatsApp) {

    sendWhatsApp.addEventListener(
        "click",
        function () {

            const data = getConversationData();

            if (!validateConversation(data)) {
                return;
            }

            const message = createClientMessage(data);

            /*
             * JIMAH DEMONSTRATION WHATSAPP NUMBER
             * 0722720824
             *
             * WhatsApp requires the international format:
             * 254722720824
             */

            const whatsappNumber = "+254722720824";

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);


            /*
             * Open WhatsApp in a new browser tab.
             */

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}

    /* -----------------------------------------------------
       SEND TO EMAIL
       ----------------------------------------------------- */

    if (sendEmail) {

        sendEmail.addEventListener(
            "click",
            function () {

                const data =
                    getConversationData();


                if (!validateConversation(data)) {
                    return;
                }


                const message =
                    createClientMessage(data);


                const emailAddress =
                    "jimahconsultancyltd@gmail.com";


                const subject =
                    "New Website Enquiry - " +
                    data.service;


                const emailURL =
                    "mailto:" +
                    emailAddress +
                    "?subject=" +
                    encodeURIComponent(subject) +
                    "&body=" +
                    encodeURIComponent(message);


                window.location.href =
                    emailURL;

            }
        );

    }


});