// Function to toggle the navigation menu on smaller screens
function toggleMenu() {
    var nav = document.getElementById("navMenu");
    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
}

// Function to display a welcome alert when the page loads
window.onload = function() {
    alert("Welcome to Our School Website!");
}

