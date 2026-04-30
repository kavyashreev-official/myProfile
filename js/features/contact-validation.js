// js/features/contact-validation.js
function initContactValidation() {
    const contactModal = document.getElementById("contact-modal");
    const contactForm = document.getElementById("contact-form");
    const contactName = document.getElementById("contact-name");
    const contactEmail = document.getElementById("contact-email");
    const formMessage = document.getElementById("form-message");

    if (!contactModal || !contactForm || !contactName || !contactEmail || !formMessage) {
        console.log("Contact form elements not found");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactName.value.trim();
        const email = contactEmail.value.trim();

        formMessage.textContent = " ";
        formMessage.className = "text-sm"; // ✅ was classList=" ", now className

        // name validation
        if (name === "") {
            formMessage.textContent = "Name is required";
            formMessage.classList.add("text-red-500");
            contactName.focus();
            return;
        }
        if (name.length < 5) {
            formMessage.textContent = "Name must be atleast 5 characters";
            formMessage.classList.add("text-red-500");
            contactName.focus();
            return;
        }

        // email validation
        if (email === "") {
            formMessage.textContent = "Email is required";
            formMessage.classList.add("text-red-500");
            contactEmail.focus();
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = "Enter valid email";
            formMessage.classList.add("text-red-500");
            contactEmail.focus();
            return;
        }

        // ✅ Success
        // Success — send to Google Sheets
        const SHEET_URL = "https://script.google.com/macros/s/AKfycbzsQGsjaDyi1FxxCpJv4x0RE6MdI3SwpgHq_50yv3yJq-UAr5W2543TZ6WpMZXG7EY3/exec";

        formMessage.textContent = "Sending...";
        formMessage.classList.add("text-cyan-400");

        fetch(SHEET_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, email: email })
        })
            .then(function () {
                formMessage.className = "text-sm";
                formMessage.textContent = "Message submitted successfully!";
                formMessage.classList.add("text-green-500");
                contactForm.reset();

                setTimeout(function () {
                    formMessage.textContent = " ";
                    formMessage.className = "text-sm";
                    if (typeof window.closeContactModal === "function") {
                        window.closeContactModal();
                    }
                }, 1500);
            })
            .catch(function () {
                formMessage.className = "text-sm";
                formMessage.textContent = "Something went wrong. Try again.";
                formMessage.classList.add("text-red-500");
            });

        // ✅ Close modal after 1.5s
        setTimeout(function () {
            formMessage.textContent = " ";
            formMessage.className = "text-sm";
            if (typeof window.closeContactModal === "function") {
                window.closeContactModal();
            }
        }, 1500);
    });

    contactName.addEventListener("input", function () {
        formMessage.textContent = " ";
    });
    contactEmail.addEventListener("input", function () {
        formMessage.textContent = " ";
    });
}


