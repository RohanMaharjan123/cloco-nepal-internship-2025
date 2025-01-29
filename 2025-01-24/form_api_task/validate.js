// JSONBin API Configuration
const BIN_URL = "your-jsonbin-url";
const API_KEY = "your-jsonbin-api-key";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("DatingForm");

    // Event listener for form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            const formData = collectFormData();
            try {
                const response = await submitFormData(formData);
                if (response.ok) {
                    alert("Form submitted successfully!");
                    form.reset();
                    displayData(); // Refresh displayed data
                } else {
                    alert("Failed to submit form. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("An error occurred while submitting the form.");
            }
        }
    });

    displayData();
});

// Function to validate the form
function validateForm() {
    let isValid = true;

    // Validate all fields
    isValid = validateName() && isValid;
    isValid = validateAddress() && isValid;
    isValid = validateEmail() && isValid;
    isValid = validatePhone() && isValid;
    isValid = validateIQ() && isValid;
    isValid = validateDate() && isValid;
    isValid = validateEssay() && isValid;
    isValid = validateCheckbox() && isValid;

    return isValid;
}

// Function to validate Name
function validateName() {
    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    if (name.length < 3 || name.length > 40) {
        nameError.textContent = "Name must be between 3 and 40 characters.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

// Function to validate Address
function validateAddress() {
    const address = document.getElementById("address").value.trim();
    const addressError = document.getElementById("addressError");
    if (address.length < 3) {
        addressError.textContent = "Address must be at least 3 characters long.";
        return false;
    } else {
        addressError.textContent = "";
        return true;
    }
}

// Function to validate Email
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Function to validate Phone
function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const phoneError = document.getElementById("phoneError");
    if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Phone number must be exactly 10 digits.";
        return false;
    } else {
        phoneError.textContent = "";
        return true;
    }
}

// Function to validate IQ
function validateIQ() {
    const iq = document.getElementById("iq").value.trim();
    const iqError = document.getElementById("iqError");
    if (iq < 80 || iq > 200) {
        iqError.textContent = "IQ must be between 80 and 200.";
        return false;
    } else {
        iqError.textContent = "";
        return true;
    }
}

// Function to validate Date
function validateDate() {
    const date = document.getElementById("date").value;
    const dateError = document.getElementById("dateError");
    if (!date) {
        dateError.textContent = "Please select a valid date.";
        return false;
    } else {
        dateError.textContent = "";
        return true;
    }
}

// Function to validate Essay
function validateEssay() {
    const essay = document.getElementById("essay").value.trim();
    const essayError = document.getElementById("essayError");
    if (essay.split(/\s+/).length < 50) {
        essayError.textContent = "Essay must be at least 50 words.";
        return false;
    } else {
        essayError.textContent = "";
        return true;
    }
}

// Function to validate Checkbox
function validateCheckbox() {
    const checkbox = document.querySelector('input[type="checkbox"]:checked');
    const checkboxError = document.getElementById("checkboxError");
    if (!checkbox) {
        checkboxError.textContent = "Please select at least one option.";
        return false;
    } else {
        checkboxError.textContent = "";
        return true;
    }
}

// Function to collect form data
function collectFormData() {
    return {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        iq: parseInt(document.getElementById("iq").value),
        gender: document.querySelector('input[name="gender"]:checked').value,
        dateOfProposedOuting: document.getElementById("date").value,
        reasonForDating: document.getElementById("essay").value,
        educationLevelCompleted: document.getElementById("education_level").value,
        hasTattoosOrPiercings: document.getElementById("ch1").checked,
        isMoreThanTwoYearsOlder: document.getElementById("ch2").checked,
        ownsBydTeslaorBmwx9: document.getElementById("ch3").checked,
        worksFullTime: document.getElementById("ch4").checked,
        parentsAreRich: document.getElementById("ch5").checked,
        dateInWellLitLocation: document.getElementById("ch6").checked,
    };
}

// Function for submitting form data to JSONBin
async function submitFormData(formData) {
    return await fetch(BIN_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY,
        },
        body: JSON.stringify(formData),
    });
}

// Function for fetching data and displaying data
async function displayData() {
    try {
        const response = await fetch(BIN_URL, {
            method: "GET",
            headers: {
                "X-Master-Key": API_KEY,
            },
        });

        if (response.ok) {
            const data = await response.json();
            renderData(data.record);
        } else {
            console.error("Failed to fetch data.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function for rendering fetched data
function renderData(data) {
    const dataContainer = document.getElementById("DatingDisplay");
    dataContainer.innerHTML = "<h2>Fetched Data</h2>";

    const list = document.createElement("ul");
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
            list.appendChild(listItem);
        }
    }
    dataContainer.appendChild(list);
}