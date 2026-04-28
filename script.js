// ===============================
// 🔔 Reusable Alert Helper
// ===============================
function showAlert(message) {
    alert(message);
}


// ===============================
// 🚨 Emergency System
// ===============================
function activateEmergency() {
    const confirmAction = confirm("🚨 Do you want to contact emergency services?");
    if (confirmAction) {
        showAlert("🚑 Emergency services have been notified!");
    }
}


// ===============================
// 🤖 AI Symptom Checker (Improved)
// ===============================
function sendMessage() {

    const inputField = document.getElementById("userInput");
    const output = document.getElementById("response");

    if (!inputField || !output) return;

    const input = inputField.value.trim().toLowerCase();

    output.innerHTML = "";

    if (!input) {
        output.innerHTML = "❌ Please enter symptoms.";
        return;
    }

    output.innerHTML = "⏳ Analysing symptoms...";

    setTimeout(() => {

        let risk = "medium";
        let message = "ℹ️ Symptoms unclear. Consult a doctor.";

        // 🔍 Improved keyword detection
        if (input.includes("chest") || input.includes("heart")) {
            message = "⚠️ High Risk: Possible heart-related issue!";
            risk = "high";
        }
        else if (input.includes("breath") || input.includes("asthma")) {
            message = "⚠️ Critical: Breathing issue detected!";
            risk = "high";
        }
        else if (input.includes("fever") || input.includes("cold")) {
            message = "🌡️ Mild condition: Monitor symptoms.";
            risk = "low";
        }

        output.innerHTML = message;
        updateRisk(risk);

    }, 1200);
}


// ===============================
// 📊 Risk Level System
// ===============================
function updateRisk(level) {

    const riskBox = document.getElementById("riskBox");
    if (!riskBox) return;

    const states = {
        high: {
            class: "status warning",
            text: "🚨 HIGH RISK - Immediate action required!"
        },
        medium: {
            class: "status warning",
            text: "🟡 MEDIUM RISK - Consult doctor."
        },
        low: {
            class: "status good",
            text: "🟢 LOW RISK - Monitor condition."
        }
    };

    const state = states[level] || states.low;

    riskBox.className = state.class;
    riskBox.textContent = state.text;
}


// ===============================
// 🧰 First Aid System
// ===============================
function showFirstAid() {

    const box = document.getElementById("firstAid");
    if (!box) return;

    box.innerHTML = `
        <ul>
            <li>✔ Stay calm and call emergency services</li>
            <li>✔ Check breathing and pulse</li>
            <li>✔ Keep patient comfortable</li>
            <li>✔ Do not give food if unconscious</li>
        </ul>
    `;
}


// ===============================
// 📧 Validation Helpers
// ===============================
function isEmail(value = "") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidName(value = "") {
    return /^[a-zA-Z\s]+$/.test(value);
}


// ===============================
// 📧 Contact Form Validation
// ===============================
function validateContactForm(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName")?.value?.trim() || "";
    const middleName = document.getElementById("middleName")?.value?.trim() || "";
    const lastName = document.getElementById("lastName")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const message = document.getElementById("message")?.value?.trim() || "";

    if (!firstName || !lastName || !email || !message) {
        showAlert("❌ Please fill all required fields.");
        return;
    }

    if (isEmail(firstName) || isEmail(middleName) || isEmail(lastName)) {
        showAlert("❌ Name fields should NOT contain an email!");
        return;
    }

    if (!isValidName(firstName) || !isValidName(lastName) || (middleName && !isValidName(middleName))) {
        showAlert("❌ Names must contain only letters.");
        return;
    }

    if (!isEmail(email)) {
        showAlert("❌ Enter a valid email address!");
        return;
    }

    showAlert("✅ Message sent successfully!");
    event.target.reset();
}


// ===============================
// 👤 Profile Save System
// ===============================
function saveProfile(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName")?.value?.trim() || "";
    const lastName = document.getElementById("lastName")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";

    if (!firstName || !lastName || !email) {
        showAlert("❌ Please complete all fields.");
        return;
    }

    if (isEmail(firstName) || isEmail(lastName)) {
        showAlert("❌ Name fields should NOT contain an email!");
        return;
    }

    if (!isValidName(firstName) || !isValidName(lastName)) {
        showAlert("❌ Names must contain only letters.");
        return;
    }

    if (!isEmail(email)) {
        showAlert("❌ Enter a valid email!");
        return;
    }

    showAlert("✅ Profile saved successfully!");
}


// ===============================
// 📊 Live Monitoring Simulation
// ===============================
setInterval(() => {

    const heart = document.getElementById("heart");
    const oxygen = document.getElementById("oxygen");
    const status = document.getElementById("statusBox");

    if (!heart || !oxygen || !status) return;

    const hr = Math.floor(Math.random() * 40) + 60;
    const ox = Math.floor(Math.random() * 5) + 95;

    heart.textContent = hr;
    oxygen.textContent = ox;

    if (hr > 100 || ox < 95) {
        status.className = "status warning";
        status.textContent = "⚠️ Warning: Abnormal Condition";
    } else {
        status.className = "status good";
        status.textContent = "✅ Stable";
    }

}, 3000);
