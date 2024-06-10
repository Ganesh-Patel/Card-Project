// Check if user information is already stored in local storage
const storedUserInfo = localStorage.getItem("userInformation");
let userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

if (!userInfo || !isValidUserInfo(userInfo)) {
    storeUserInfo();
} else {
    displayUserInfo(userInfo);
}

// Function to check if user information is valid (all fields should not be null or empty)
function isValidUserInfo(userInfo) {
    return userInfo.firstName && userInfo.lastName && userInfo.country && userInfo.phoneNumber && userInfo.state && userInfo.city && userInfo.village;
}

// Function to store user information in local storage
function storeUserInfo() {
    let firstName, lastName, country, phoneNumber, state, city, village;

    do {
        firstName = prompt("Enter your first name:");
    } while (!firstName);

    do {
        lastName = prompt("Enter your last name:");
    } while (!lastName);

    do {
        country = prompt("Enter your country:");
    } while (!country);

    do {
        phoneNumber = prompt("Enter your phone number:");
    } while (!phoneNumber);

    do {
        state = prompt("Enter your state:");
    } while (!state);

    do {
        city = prompt("Enter your city:");
    } while (!city);

    do {
        village = prompt("Enter your village:");
    } while (!village);

    userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    // Store user information in local storage as a JSON string
    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    // Display user information in the card
    displayUserInfo(userInfo);
}

// Function to display user information in the card
function displayUserInfo(userInfo) {
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}

// Function to print the card
function printCard() {
    window.print();
}

// Function to download the card as an image
function downloadCard() {
    html2canvas(document.querySelector("#info-card")).then(canvas => {
        let link = document.createElement('a');
        link.download = 'user-info-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// Theme toggle logic
const checkbox = document.getElementById("checkbox");
const body = document.body;
const currTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currTheme);
checkbox.checked = currTheme === 'dark';

checkbox.addEventListener("change", () => {
    const newTheme = checkbox.checked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    body.setAttribute('data-theme', newTheme);
});
