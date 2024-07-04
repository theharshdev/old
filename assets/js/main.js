// JS for dark/light mode toggles ------
$(".darkModeToggleBtn").click(() => {
  $("html").addClass("dark");
  // Making a cookie for dark mode -----
  document.cookie = "darkMode = darkModeOn; max-age =" + 60 * 60 * 24 * 365;
  // Deleting the light mode cookie ----
  document.cookie = "lightMode = ";
});

$(".lightModeToggleBtn").click(() => {
  $("html").removeClass("dark");
  // Making the light mode cookie ------
  document.cookie = "lightMode = lightModeOn; max-age =" + 60 * 60 * 24 * 365;
  // Deleting the dark mode cookie ----
  document.cookie = "darkMode = ";
});

// Checking the existing cookie for light/dark mode ------
window.addEventListener("load", () => {
  // Checking for light mode cookie -----
  if (document.cookie.includes("lightModeOn")) {
    $("html").removeClass("dark");
  }
  // Checking for dark mode cookie -----
  if (document.cookie.includes("darkModeOn")) {
    $("html").addClass("dark");
  }
});

// JS for menu togglers -------
$(".openMenu").click(() => {
  $(".menu").slideDown(300);
});

$(".closeMenu").click(() => {
  $(".menu").slideUp(300);
});

window.addEventListener("load", () => {
  menuToggle();
});

window.addEventListener("resize", () => {
  menuToggle();
});

function menuToggle() {
  if (window.innerWidth < 640) {
    $(".navLinks").click(() => {
      $(".menu").slideUp(300);
    });
    $(".menu").hide();
  } else {
    $(".menu").show();
  }
}

// JS for to top button --------
window.addEventListener("scroll", () => {
  const myScrollTop = document.documentElement.scrollTop;
  if (myScrollTop > 200) {
    $(".toTop").show();
  } else {
    $(".toTop").hide();
  }
});

// On click you go to the top of the page ------
$(".toTop").click(() => {
  document.documentElement.scrollTop = 0;
});

// JS for pre loader ------
$(document).ready(function () {
  $("#preLoader").hide();
});

const projectBoxs = document.querySelectorAll(".projectBox");
const projectImgs = document.querySelectorAll(".projectImg");

function updateLocation(event) {
  projectImgs.forEach((projectImg) => {
    projectImg.style.left = `${event.clientX - 120}px`;
  });
}

projectBoxs.forEach((projectBox) => {
  projectBox.addEventListener("mousemove", updateLocation);
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navBar");
  let lastScrollPosition = 0;
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const scrollDifference = Math.abs(scrollPosition - lastScrollPosition);
    if (scrollDifference >= 300) {
      if (scrollPosition > lastScrollPosition) {
        navbar.classList.remove("fixed");
        navbar.classList.remove("navBarAnimetion");
        navbar.classList.add("absolute");
      } else if (scrollPosition === 0) {
        navbar.classList.remove("fixed");
        navbar.classList.add("absolute");
      } else {
        navbar.classList.add("fixed");
        navbar.classList.add("navBarAnimetion");
        navbar.classList.remove("absolute");
      }
      lastScrollPosition = scrollPosition;
    }
  });
});

// Form validation starts here ---------------
let userNameValid, userEmailValid, userNumValid, userMessageValid;

// Validation for name input ----------------
function validateName(name, nameIcon, nameError) {
  const nameRegx = /^[a-zA-Z\s'-]+$/;
  if (name.value === "") {
    nameIcon.style.display = "block";
    userNameValid = 0;
    nameError.innerHTML = "Please! enter your full name to proceed.";
  } else if (!nameRegx.test(name.value)) {
    nameIcon.style.display = "block";
    userNameValid = 0;
    nameError.innerHTML = "Numeric values are not allowed in this input feild!";
  } else {
    nameIcon.style.display = "none";
    userNameValid = 1;
    nameError.innerHTML = "";
  }
}

// validation for email input ----------------
function validateEmail(email, emailIcon, emailError) {
  const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value === "") {
    emailIcon.style.display = "block";
    userEmailValid = 0;
    emailError.innerHTML = "Please! enter your email address to proceed.";
  } else if (!emailRegx.test(email.value)) {
    emailIcon.style.display = "block";
    userEmailValid = 0;
    emailError.innerHTML = "Please! enter a valid email address.";
  } else {
    emailIcon.style.display = "none";
    userEmailValid = 1;
    emailError.innerHTML = "";
  }
}

// validation for number input -----------
function validateNumber(number, numIcon, numError) {
  const numRegx = /^[0-9]+$/;
  if (number.value === "") {
    numIcon.style.display = "block";
    userNumValid = 0;
    numError.innerHTML = "Please! enter your contact number to proceed.";
  } else if (!numRegx.test(number.value)) {
    numIcon.style.display = "block";
    userNumValid = 0;
    numError.innerHTML = "Alphabets are not alllowed in this input feild!";
  } else if (number.value.length != 10) {
    numIcon.style.display = "block";
    userNumValid = 0;
    numError.innerHTML = "Only 10 digits are not alllowed in this input feild!";
  } else {
    numIcon.style.display = "none";
    userNumValid = 1;
    numError.innerHTML = "";
  }
}

// Validate for message input ---------
function validateMessage(message, messageIcon, messageError) {
  const messageRegx = /(http[s]?:\/\/|www\.|\d)/;
  if (message.value === "") {
    messageIcon.style.display = "block";
    userMessageValid = 0;
    messageError.innerHTML = "Please! describe your query here to proceed.";
  } else if (messageRegx.test(message.value)) {
    messageIcon.style.display = "block";
    userMessageValid = 0;
    messageError.innerHTML =
      "Links or numbers are not allowed in this input feild!";
  } else {
    messageIcon.style.display = "none";
    userMessageValid = 1;
    messageError.innerHTML = "";
  }
}

const userName = document.getElementById("userName");
const userMessage = document.getElementById("userMessage");
const userNum = document.getElementById("userNum");
const userEmail = document.getElementById("userEmail");
const userMessageIcon = document.getElementById("userMessageIcon");
const userNumberIcon = document.getElementById("userNumberIcon");
const userEmailIcon = document.getElementById("userEmailIcon");
const userNameIcon = document.getElementById("userNameIcon");
const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const numErr = document.getElementById("numErr");
const messageErr = document.getElementById("messageErr");

function validateFormSubmit() {
  validateName(userName, userNameIcon, nameErr);
  validateEmail(userEmail, userEmailIcon, emailErr);
  validateNumber(userNum, userNumberIcon, numErr);
  validateMessage(userMessage, userMessageIcon, messageErr);

  if (userNameValid && userEmailValid && userNumValid && userMessageValid) {
    return true;
  } else {
    return false;
  }
}

userName.addEventListener("input", () => {
  validateName(userName, userNameIcon, nameErr);
});

userEmail.addEventListener("input", () => {
  validateEmail(userEmail, userEmailIcon, emailErr);
});

userNum.addEventListener("input", () => {
  validateNumber(userNum, userNumberIcon, numErr);
});

userMessage.addEventListener("input", () => {
  validateMessage(userMessage, userMessageIcon, messageErr);
});

$(".closeThannkyouPopupBox").click(() => {
  $(".thannkyouPopupBox").hide();
});
