// scripts.js
console.log("scripts.js loaded");

// Function to handle a click on a specific cookie type
function handleCookieClick(cookieType) {
    alert(`You clicked on ${cookieType}! Yum! You have a good taste in cookies!!`);
}

// Function to attach click event listeners to each cookie type
function attachCookieClickEvents() {
    const cookieListItems = document.querySelectorAll('#cookie-types ul li');

    cookieListItems.forEach(function (cookieListItem) {
        const cookieType = cookieListItem.textContent.trim();

        // Add a unique ID to each list item
        cookieListItem.id = cookieType.replace(/\s+/g, '-').toLowerCase();

        // Add click event listener for each cookie type
        cookieListItem.addEventListener('click', function () {
            handleCookieClick(cookieType);
        });
    });
}

// Attach event listeners after the DOM content has loaded
document.addEventListener('DOMContentLoaded', function () {
    attachCookieClickEvents();
});

// Include the Slick slider JS files
const slickScript = document.createElement('script');
slickScript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
document.head.appendChild(slickScript);


