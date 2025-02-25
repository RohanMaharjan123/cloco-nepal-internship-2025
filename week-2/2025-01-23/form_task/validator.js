document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("DatingForm");
    let error = false;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents submission

        error = false; // Reset error
        validatingName();
        validatingAddress();
        validatingEmail();
        validatingPhone();
        validatingIQ();
        validatingDate();
        validatingEssay();

        if (!error) {
            alert("Form submitted successfully!");
            form.reset(); 
        }
    });

    const validatingName = () => {
        const name = document.getElementById("name").value.trim();
        const errorField = document.getElementById("nameError");
        if (name.length < 3 || name.length > 40) {
            errorField.textContent = "Name must be between 3 and 40 characters.";
            error = true;
        } else {
            errorField.textContent = "";
            return true;
        }
    };

    const validatingAddress = () => {
        const address = document.getElementById("address").value.trim();
        const errorField = document.getElementById("addressError");
        if (address.length < 3) {
            errorField.textContent = "Address must be at least 3 characters long.";
            error = true;
        } else {
            errorField.textContent = "";
            return true;
        }
    };

    const validatingEmail = () => {
        const email = document.getElementById("email").value.trim();
        const errorField = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorField.textContent = "Please enter a valid email address.";
            error = true;
        } else {
            errorField.textContent = "";
            return true;
        }
    };

    const validatingPhone = () => {
        const phone = document.getElementById("phone").value.trim();
        const errorField = document.getElementById("phoneError");
        if (!/^\d{10}$/.test(phone)) {
            errorField.textContent = "Phone number must be exactly 10 digits.";
            error = true;
        } else {
            errorField.textContent = "";
            return true;
        }
    };

    const validatingIQ = () => {
        const iq = document.getElementById("iq").value.trim();
        const errorField = document.getElementById("iqError");
        if (iq < 80 || iq > 200) {
            errorField.textContent = "IQ must be between 80 and 200.";
            error = true;
        } else {
            errorField.textContent = "";
            return true;
        }
    };

    function validateCheckbox() {
                const checkbox = document.querySelector(
                    'input[type="checkbox"]:checked'
                );
                const checkboxError = document.getElementById("checkboxError");

                if (!checkbox) {
                    checkboxError.textContent = "Please select at least one option.";
                    return false;
                } else {
                    checkboxError.textContent = "";
                    return true;
                }
            }
    const validatingDate = () => {
        const date = document.getElementById("date").value;
        const errorField = document.getElementById("dateError");
        if (!date) {
            errorField.textContent = "Please select a valid date.";
            error = true;
        } else {
            errorField.textContent = "";
            return true;
        }
    };

    const validatingEssay = () => {
        const essay = document.getElementById("essay").value.trim();
        const errorField = document.getElementById("essayError");
        if (essay.length < 50) {
            errorField.textContent = "Essay must be at least 50 words.";
            error = true;
        } else {
            errorField.textContent = "";
            return true;
        }
    };
});