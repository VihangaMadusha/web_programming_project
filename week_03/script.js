// ---------- Alert button ----------
function showAlert() {
    alert("Hello! This is an alert box.");

    // also show a message on the page itself
    var msg = document.getElementById("alertMessage");
    msg.style.display = "block";
    msg.innerHTML = "You clicked the alert button!";
}

// ---------- Popup ----------
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// ---------- Go to GitHub ----------
function goToGithub() {
    window.open("https://github.com/VihangaMadusha", "_blank");
}

// close the popup if the user clicks on the dark background
window.onclick = function (event) {
    var popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
};

// ---------- JavaScript Activities ----------
function changeName() {
    document.querySelector("h2").innerHTML = "I am Madush..!";
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

function showMessage() {
    alert("Welcome to my personal profile!");
}

function showSkills() {
    alert("My skills are HTML, CSS and Python.");
}

// ---------- Change / Reset profile picture ----------
// save the original picture so we can go back to it
var originalPic = document.getElementById("profilePic").src;

function changeImage() {
    document.getElementById("profilePic").src = "images.png";
}

function resetImage() {
    document.getElementById("profilePic").src = originalPic;
}
